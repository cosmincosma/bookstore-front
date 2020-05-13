import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
    "src/styles.css"
  ]
})
export class BookListComponent implements OnInit {

  numberOfBooks : number;
  books : Array<Book> = new Array<Book>();
  areNoBooks : boolean = false;


  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.countBooks().subscribe(
      resp => {
        this.numberOfBooks = resp["count"];
        if(resp["count"] == 0) {
            this.areNoBooks = true;
        }
      },
      (error) => {
        if (error) {
          console.log(error.error)
        }
      }
    )

    this.bookService.getAllBooks().subscribe(
      (resp: Array<Book>) => {
        this.books = resp;
      },
      (error) => {
        if (error) {
          console.log(error.error)
        }
      }
    )

  }
  

}
