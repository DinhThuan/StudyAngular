import { Person } from './person';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @ViewChild('input') input: ViewChild;

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;

  persons: Person[] = [];
  checkAll: boolean = false;
  configPagination: any = {};
  arr: boolean[] = [];
  sortName: boolean = false;
  arrItemDelete = [];
  constructor() {
    var str1 = "10";
    var str2 = "2";
    // console.log(str1.length);
    console.log(str1.charCodeAt(0));
    console.log(str2.charCodeAt(0));
  }

  ngOnInit() {
    this.configPagination.itemsPerPage = 10;
    this.configPagination.currentPage = 1;
    for (let i = 0; i < 100; i++) {
      this.persons.push(new Person(i, 'name ' + i, 'address ' + i, 'phone ' + i));
    }
    for (let i = 0; i < 10; i++) {
      this.arr.push(false);
    }
  }

  deleteAllItem() {
    if (this.checkAll) {
      this.persons = [];
    }
  }

  isCheckAll(event: any) {
    this.checkAll = event.target.checked;
    this.arr[event.target.value - 1] = event.target.checked;
    // console.log(this.arr);
  }

  changePage(event: number) {
    // this.checkAll = false;
    this.configPagination.currentPage = event;
  }

  dynamicSort(property) {
    // console.log(property[0]);
    // console.log(property);
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  compareAsc(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  compareDesc(a, b) {
    if (a.name > b.name)
      return -1;
    if (a.name < b.name)
      return 1;
    return 0;
  }

  sortByName() {
    this.sortName = !this.sortName;
    if (this.sortName) {
      this.persons.sort(this.dynamicSort("-name"));
    } else {
      this.persons.sort(this.dynamicSort("name"));
    }
  }

  choise: boolean = false;
  checkboxItem(event: any, index: number) {
    // console.log(this.input);
    // this.choise = event.target.checked;
    // console.log(this.persons[index].check);
    // this.persons[index].check = event.target.checked;
    // console.log(this.persons[index].check);
  }

}
