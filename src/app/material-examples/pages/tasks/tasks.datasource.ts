import { Injectable } from '@angular/core'
import { DataSource } from '@angular/cdk/table'
import { Task } from '../../services/tasks-data.service'
import { BehaviorSubject, Observable } from 'rxjs'
import { CollectionViewer } from '@angular/cdk/collections'
import { HttpClient } from '@angular/common/http'
import { PageEvent } from '@angular/material/paginator'
import { map, switchMap, tap } from 'rxjs/operators'

type QueryParams = {
  page: number
  perpage: number
}

@Injectable({
  providedIn: 'root'
})
export class TasksDataSource extends DataSource<Task>{

  private page = new BehaviorSubject<PageEvent>({
    length: 0,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 0
  })

  private data = new BehaviorSubject<Task[]>([])

  total = 0

  constructor(private http: HttpClient) { super() }

  setPage(page: PageEvent) {
    this.page.next(page)
  }

  connect(collectionViewer: CollectionViewer): Observable<Task[]> {

    this.page.pipe(
      map(page => ({
        page: page.pageIndex,
        perpage: page.pageSize
      })),
      tap(console.log),
      switchMap(params => this.fetchData(params)),
    )
      .subscribe(response => {
        this.total = parseInt(response.headers.get('X-Total-Count'))
        this.data.next(response.body)
      })

    return this.data.asObservable()
  }

  private fetchData(params: QueryParams) {
    return this.http.get<Task[]>('http://localhost:3000/todos', {
      params: {
        _page: (params.page + 1).toString(),
        _limit: params.perpage.toString(),
        _sort: 'id',
        _order: 'asc'
      },
      observe: 'response'
    })
  }

  disconnect(collectionViewer: CollectionViewer): void {

  }
}