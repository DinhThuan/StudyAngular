import { Component, OnInit, Input } from '@angular/core';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.scss']
})
export class ErrorValidateComponent implements OnInit {

  @Input('control') control: any;
  @Input('control-name') controlName;

  constructor() { }

  ngOnInit() {
    
  }

  get message() {
    console.log(this.control);
    for (let err in this.control.errors) {
      if (this.control.touched) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
  }

  getErrorMessage(err, value) {
    let message = {
      'required': `${this.controlName} is required`,
      'minlength': `MinLength : ${value.requiredLength} character`,
      'maxlength': `Maxlength : ${value.requiredLength} character`,
    }
    return message[err];
  }
}
