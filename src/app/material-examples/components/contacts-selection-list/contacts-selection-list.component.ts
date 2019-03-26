import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../services/contacts-data.service';

@Component({
    selector: 'app-contacts-selection-list',
    templateUrl: './contacts-selection-list.component.html',
    styleUrls: ['./contacts-selection-list.component.scss']
})
export class ContactsSelectionListComponent implements OnInit {

    @Input() contacts: Contact[]

    @Output() selectionChange = new EventEmitter<Contact>()

    select(contact: Contact) {
        this.selectionChange.emit(contact)
    }

    constructor() { }

    ngOnInit() {
    }

}
