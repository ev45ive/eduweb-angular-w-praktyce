import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../services/contacts-data.service';

@Component({
    selector: 'app-simple-contacts-list',
    templateUrl: './simple-contacts-list.component.html',
    styleUrls: ['./simple-contacts-list.component.scss']
})
export class SimpleContactsListComponent implements OnInit {

    @Input() contacts: Contact[]

    constructor() { }

    ngOnInit() {
    }

}
