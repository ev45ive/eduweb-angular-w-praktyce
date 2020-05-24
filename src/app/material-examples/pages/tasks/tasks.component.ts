import { Component, OnInit, Injectable } from '@angular/core';
import { TasksDataService, Task } from '../../services/tasks-data.service';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { TasksDataSource } from './tasks.datasource';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    activeColumns = ['id', 'title', 'completed', 'menu']
    headerColumns = ['id', 'title', 'completed', 'menu']

    constructor(public dataSource: TasksDataSource) { }

    ngOnInit() {
    }

}

