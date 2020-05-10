import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  numberOfBooks : number;
  books;


  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.countBooks().subscribe(
      resp => {
        this.numberOfBooks = resp["count"];
      }
    )

    this.bookService.getAllBooks().subscribe(
      resp => {
        this.books = resp;
      },
      err => {
        
      }
    )
  }
  

}
