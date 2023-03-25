import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  user = {
    name: 'Hoang',
    age: 26
  }

  obj = {
    type: 'text',
    value: 'something',
    attributes: [], // thuộc type NamedNodeMap, dạng như một array
    // … các thuộc tính, method khác
  };

  showInfo() {
    alert('Inside Angular Component method');
  }
}
