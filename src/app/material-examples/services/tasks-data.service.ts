import { Injectable } from '@angular/core';

import * as  tasks from './tasks-data.json'
import { of } from 'rxjs';

export interface TasksQuery { filter?: string, page?: number, sort?: any, perpage?: number }
export interface Task {
    id: number,
    title: string
    completed: boolean
    user: {
        id: number
        name: string
        username: string
        email: string
        phone: string
        company: {
            name: string
            catchPhrase: string
            bs: string
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class TasksDataService {

    constructor() { }

    queryTasks(query: TasksQuery) {
        let { filter = '', page = 1, sort = 'title', perpage = 10 } = query;
        let from = perpage * (page - 1), to = perpage * page

        filter = filter.toLocaleLowerCase()

        const result = (tasks as unknown as Array<Task>)
            .filter(task => task.title.toLocaleLowerCase().includes(filter))
            .sort((a, b) => a[sort] <= b[sort] ? -1 : 1)
            .slice(from, to)
            
        return of(result)
    }
}
