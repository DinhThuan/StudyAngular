import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngOnInit() {
    this.createForm();
    // this.profileForm.patchValue({ firstName: 'dvthuan' });
  }

}
