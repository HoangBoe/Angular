import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggkle',
  templateUrl: './toggkle.component.html',
  styleUrls: ['./toggkle.component.css']
})
export class ToggkleComponent implements OnInit {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>()
  constructor(){}
  ngOnInit(){}
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
