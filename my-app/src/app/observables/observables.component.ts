import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  visible: boolean = true;
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();
  time: any;

  constructor() { }

  ngOnInit() {
    // this.time = new Observable(observer =>
    //   setInterval(() => observer.next(new Date().toString()), 1000)
    // )
    // setInterval(() => {
    //   console.log('ahihi');
    // }, 2000);
  }

  toggle() {
    this.visible = !this.visible;
  }



}
