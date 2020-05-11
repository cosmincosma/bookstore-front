import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'bs-book-create-form',
  templateUrl: './book-create-form.component.html',
  styles: [
    "src/styles.css"
  ]
})
export class BookCreateFormComponent implements OnInit {

  book: any = {};
  validationErrors = {};

  constructor(private router: Router, private bookService : BookService) { }

  ngOnInit(): void {
  }

  addBook(){
    this.bookService.addBook(this.book).subscribe(
      (response) => {
        console.log(response);
        if(response["book_id"]){
          //TODO: succes dialog
        }
      },
      (error) => {
        if (error) {
          console.log(error.error)
          this.validationErrors = error.error;
        }
      }
    );
  }

}
