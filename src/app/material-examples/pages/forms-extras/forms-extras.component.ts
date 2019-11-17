import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService, User } from 'src/app/core/services/users.service';
import { map, switchMap, filter } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-forms-extras',
  templateUrl: './forms-extras.component.html',
  styleUrls: ['./forms-extras.component.scss']
})
export class FormsExtrasComponent implements OnInit {

  assigneeInput = new FormControl('', [])

  suggestions = this.assigneeInput.valueChanges.pipe(
    filter(selection => 'object' !== typeof selection),
    switchMap(input => this.usersService.findAllByName(input))
  )

  taskExtras = new FormGroup({
    assignee: new FormControl(null, [])
  })
  
  selectAssignee(selection:  MatAutocompleteSelectedEvent){
    this.taskExtras.get('assignee').setValue(selection.option.value)
  }

  formatUserSuggestion(selection: string | User) {
    if ('object' === typeof selection) {
      return selection.name
    } else {
      return selection
    }
  }

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
  }

}
