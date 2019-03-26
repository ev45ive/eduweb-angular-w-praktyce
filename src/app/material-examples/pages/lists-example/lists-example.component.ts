import { Component, OnInit } from '@angular/core';
import { ContactsDataService, Contact } from '../../services/contacts-data.service';

@Component({
    selector: 'app-lists-example',
    templateUrl: './lists-example.component.html',
    styleUrls: ['./lists-example.component.scss']
})
export class ListsExampleComponent implements OnInit {

    selected: Contact
    contacts: Contact[] = []

    constructor(private service: ContactsDataService) { }

    ngOnInit() {
        this.contacts = this.service.findContacts()
    }

}
