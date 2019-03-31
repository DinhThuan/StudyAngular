import { Component, OnInit, Input, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked {

  @Input('ahihi') message: string;

  constructor() { }

  ngOnChanges() {
    console.log("ngOnchanges");

  }

  // ngOnDestroy() {
  //   console.log('ngOndestroy');
  // }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngOnInit() {
    console.log(this.message)
  }

}
