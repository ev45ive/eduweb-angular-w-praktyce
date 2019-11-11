import { Component, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from './CustomErrorStateMatcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators'

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
        duedate: new FormControl(new Date()),
        priotity: new FormControl(''),
        options: new FormGroup({
            billable: new FormControl(false),
            blocker: new FormControl(false),
            technical: new FormControl(false),
        }),
        description: new FormControl(''),
    })
    datepickerOpened = false;
    errorMatcher = new CustomErrorStateMatcher()

    constructor(private breakpointObserver: BreakpointObserver) { }

    isMobile = this.breakpointObserver.observe([
        Breakpoints.Handset,
        Breakpoints.Tablet
    ]).pipe(
        map(result => result.matches)
    )

    ngOnInit() {
    }

    handleDate($event) {
        console.log($event)
    }

    dateFilter(d: Date) {
        const day = d.getDay()
        return day !== 0 && day !== 6;
    }

    dateClass(d: Date) {
        const date = d.getDate()
        return (date === 1 || date === 20) ? 'datepicker-review-day' : undefined
    }

    createTask() {
        console.log(this.taskForm.value)
    }
}

