import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        return (control && control.invalid && (control.dirty || control.touched || form.submitted));
    }
}
