import { Component, OnInit } from '@angular/core';
import { TasksDataService, Task } from '../../services/tasks-data.service';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    activeColumns = ['id', 'title']
    headerColumns = this.activeColumns.push('menu')
    
    dataSource:any = [{ id: 123, title: 'Test task', completed: true }]

    constructor(private tasksService: TasksDataService) { 
        this.dataSource = new TasksDataSource(tasksService)
    }

    ngOnInit() {
    }

}

export class TasksDataSource extends DataSource<Task>{
    
    private data = new BehaviorSubject([])
    
    constructor(private tasksService: TasksDataService){ super() }
    
    connect(collectionViewer:CollectionViewer): Observable<Task[]> {
        collectionViewer.viewChange.subscribe(console.log)
        
        this.tasksService.queryTasks({}).subscribe(result => {
            this.data.next(result)
        })
        return this.data.asObservable()
    }    
    
    disconnect(collectionViewer: CollectionViewer): void {
  
    }    
}