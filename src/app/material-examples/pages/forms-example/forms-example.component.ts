import { Component, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from './CustomErrorStateMatcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-forms-example',
    templateUrl: './forms-example.component.html',
    styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent implements OnInit {

    taskForm = new FormGroup({
        title: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/^[a-zA-z]/)
        ]),
        type: new FormControl('Task'),
        priotity: new FormControl(''),
        options: new FormGroup({
            billable: new FormControl(false),
            blocker: new FormControl(false),
            technical: new FormControl(false),
        }),
        description: new FormControl(''),
    })

    errorMatcher = new CustomErrorStateMatcher()

    constructor() { }

    ngOnInit() {
    }

    createTask(){
        console.log(this.taskForm.value)
    }
}
