import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  questions = {
    question1: true,
    question2: false,
  };

  ngOnInit() {}
}
