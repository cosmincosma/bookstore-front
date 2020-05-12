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
  generatedIsbn: any;

  constructor(private router: Router, private bookService : BookService) { }

  ngOnInit(): void {
  }

  addBook(){
    this.bookService.addBook(this.book).subscribe(
      (response) => {
        console.log(response);
        if(response["book_id"]){
          document.getElementById("openSuccesModalButton").click();
          this.resetForms();
          this.generatedIsbn = response["generated_isbn"];

          /*setTimeout(() => {
            this.router.navigate(['/book-details/',  response["book_id"]]);
          }, 2000);*/

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

  resetForms() {
    this.book = {};
    this.validationErrors = {};
  }

}
