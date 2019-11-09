import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';


export class CustomErrorStateMatcher implements ErrorStateMatcher {

    isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        return (control && control.invalid && (control.dirty || control.touched || form.submitted))
    }

}


@Component({
    selector: 'app-forms-example',
    templateUrl: './forms-example.component.html',
    styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent implements OnInit {

    errorMatcher = new CustomErrorStateMatcher()
    
    constructor() { }

    ngOnInit() {
    }

}
