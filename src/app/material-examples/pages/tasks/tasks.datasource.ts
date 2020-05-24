import { Injectable } from '@angular/core'
import { DataSource } from '@angular/cdk/table'
import { Task } from '../../services/tasks-data.service'
import { BehaviorSubject, Observable, combineLatest } from 'rxjs'
import { CollectionViewer } from '@angular/cdk/collections'
import { HttpClient } from '@angular/common/http'
import { PageEvent } from '@angular/material/paginator'
import { map, switchMap, tap } from 'rxjs/operators'
import { Sort } from '@angular/material/sort'

type QueryParams = {
  page: number
  perpage: number
  sort: string
  order: 'asc' | 'desc' | ''
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

  private sort = new BehaviorSubject<Sort>({
    active: '',
    direction: 'asc'
  })

  private data = new BehaviorSubject<Task[]>([])

  total = 0

  constructor(private http: HttpClient) { super() }

  setSort(sort: Sort) {
    this.sort.next(sort)
  }

  setPage(page: PageEvent) {
    this.page.next(page)
  }

  connect(collectionViewer: CollectionViewer): Observable<Task[]> {
    const sortChanges = this.sort.pipe(
      map(sort => ({
        sort: sort.active,
        order: sort.direction
      }))
    );

    const pageChanges = this.page.pipe(
      map(page => ({
        page: page.pageIndex + 1,
        perpage: page.pageSize
      })))

    combineLatest(sortChanges, pageChanges).pipe(
      map(([sort, page]) => ({
        ...sort, ...page
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
        _page: (params.page).toString(),
        _limit: params.perpage.toString(),
        _sort: params.sort,
        _order: params.order
      },
      observe: 'response'
    })
  }

  disconnect(collectionViewer: CollectionViewer): void {

  }
}