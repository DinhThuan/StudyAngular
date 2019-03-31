import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  type: string = "password";
  check: boolean;
  constructor() { }

  ngOnInit() {
  }

  getValueEmail(value: string):void {
    if (value == "dinhthuan") {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  togglePassword() {
    if (this.type == 'password') {
      this.type = 'text'
    } else {
      this.type = 'password'
    }
  }

}
