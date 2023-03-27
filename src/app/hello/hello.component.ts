import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{
  @ViewChild('toggleComp') toggleComp!: ToggleComponent;


  user = {
    name: 'Hoang',
    age: 26
  }
  checked = true;
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];

  ngOnInit() {
    // toggle undefind khi ở oninit
    console.log("onInit", this.toggleComp);
  }

  ngAfterViewInit() {
    // khi dùng viewChild thì toggleComp sẽ có value khi ở ngAfterViewInit
    console.log("viewInit", this.toggleComp)
  }

  toggleInside() {
    this.toggleComp.toggle();
  }
}
