import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TasksDataSource } from './tasks.datasource';
import { MatPaginator, MatSort, Sort } from '@angular/material';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator)
    paginator: MatPaginator

    @ViewChild(MatSort)
    sort: MatSort

    activeColumns = ['id', 'title', 'completed', 'menu']

    constructor(public dataSource: TasksDataSource) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.paginator.page.subscribe(page => {
            this.dataSource.setPage(page)
        })
        this.sort.sortChange.subscribe((sort:Sort) => {
            this.dataSource.setSort(sort)
        })
    }

}

