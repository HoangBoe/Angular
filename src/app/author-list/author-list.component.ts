import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  firstname: string ='';
  constructor() {}
  ngOnInit() {}
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }

  addItem() {
    // const input = document.getElementById('addInput') as HTMLInputElement | any;
    // console.log('input', input.value  );
    console.log('fristname', this.firstname);

    let author: Author ={
      id: 11,
      firstName: "",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33"
    };
    author.firstName = this.firstname;
    this.authors.push(author);
  }

  inputClick(){
    this.firstname = '';
  }
}
