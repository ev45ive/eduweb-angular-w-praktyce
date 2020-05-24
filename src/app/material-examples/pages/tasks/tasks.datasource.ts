import { Injectable } from '@angular/core'
import { DataSource } from '@angular/cdk/table'
import { Task, TasksDataService } from '../../services/tasks-data.service'
import { BehaviorSubject, Observable } from 'rxjs'
import { CollectionViewer } from '@angular/cdk/collections'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksDataSource extends DataSource<Task>{

  private data = new BehaviorSubject([])
  total: string

  constructor(private http: HttpClient) { super() }

  connect(collectionViewer: CollectionViewer): Observable<Task[]> {

    this.http.get<Task[]>('http://localhost:3000/todos', {
      params: {
        _page: '1', _perpage: '10', _sort: 'id', _order: 'asc'
      },
      observe: 'response'
    })
      .subscribe(result => {
        this.total = result.headers.get('X-Total-Count')
        this.data.next(result.body)
      })
    return this.data.asObservable()
  }

  disconnect(collectionViewer: CollectionViewer): void {

  }
}