import { Injectable } from '@angular/core';
import * as users from '../data/users.json'
import { Observable, of } from 'rxjs';

export interface User {
    id: number
    name: string
    email: string
    position: string
    photo: string
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor() { }

    findAllByName(query: string): Observable<User[]> {
        return of(users.filter(user => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
    }
}