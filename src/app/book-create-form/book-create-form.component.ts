import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-book-create-form',
  templateUrl: './book-create-form.component.html',
  styles: [
  ]
})
export class BookCreateFormComponent implements OnInit {

  book = {
    title: "Example",
    description: "Description",
    publicationDate: "22-10-2022",
    numberOfPages: 200,
    cost: 33.00,
    language: "English",
    imageURL:"https://cdn1.dol.ro/dol.ro/cs-content/cs-photos/products/original/_219021_1_1455106995.jpg"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addBook(){
    //REST API
    this.router.navigate(['/book-list']);
  }

}
