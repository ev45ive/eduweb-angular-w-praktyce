import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../services/contacts-data.service';

@Component({
    selector: 'app-contact-details-list',
    templateUrl: './contact-details-list.component.html',
    styleUrls: ['./contact-details-list.component.scss']
})
export class ContactDetailsListComponent implements OnInit {

    @Input() contact: Contact

    constructor() { }

    ngOnInit() {
    }

}
