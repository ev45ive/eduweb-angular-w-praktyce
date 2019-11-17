import { Component, OnInit } from '@angular/core';
import { ContactsDataService, Contact } from '../../services/contacts-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    selected: Contact
    contacts: Contact[] = []

    constructor(private service: ContactsDataService) { }
    
    toggleSelection(user:Contact){
        this.selected = user === this.selected? null : user
    }

    ngOnInit() {
        this.contacts = this.service.findContacts()
    }
}
