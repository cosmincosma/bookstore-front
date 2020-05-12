import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { map } from "rxjs/operators";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styles: [
    "src/styles.css"
  ]
})
export class BookDetailsComponent implements OnInit {

  book : any;
  available : boolean = false;
  isbnData: any = {};
  validationMessage: string;

  constructor(private router: Router, 
    private bookService: BookService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .pipe(map(params => params['bookId']))
    .pipe(switchMap(id => this.bookService.getBook(id)))
    .subscribe(
      resp => {
        console.log(resp);
        this.book = resp;

        if(resp["availability"] === Book.AvailabilityEnum.UNKNOWN || resp["availability"] === Book.AvailabilityEnum.AVAILABLE){
          this.available = true;
        }
        
      },
      (error) => {
        if (error) {
          console.log(error.error);
          if(error.error.message === "Book not found."){
            this.router.navigate(['/not-found']);
          }
        }
      }
    );
  }

  deleteBook(){
    this.route.params
    .pipe(map(params => params['bookId']))
    .pipe(switchMap(id => this.bookService.deleteBook(id, this.isbnData)))
    .subscribe(
      resp => {
        document.getElementById("modalDeleteButton").click();
        this.resetForms();
        this.router.navigate(['/book-list']);
      },
      (error) => {
        if (error) {
          console.log(error.error);
          this.validationMessage = error.error;
        }
      }
    );     
  }

  makeTheBookAvailable(){
    let requestToFinalize = {"availability": "AVAILABLE"};

    this.route.params
    .pipe(map(params => params['bookId']))
    .pipe(switchMap(id => this.bookService.updateBookAvailability(id, requestToFinalize)))
    .subscribe(
      resp => {
        console.log(resp);
        this.refresh();
      },
      (error) => {
        if (error) {
          console.log(error.error);
        }
      }
    );     
  }

  makeTheBookUnavailable(){
    let requestToFinalize = {"availability": "NOT_AVAILABLE"};

    this.route.params
    .pipe(map(params => params['bookId']))
    .pipe(switchMap(id => this.bookService.updateBookAvailability(id, requestToFinalize)))
    .subscribe(
      resp => {
        console.log(resp);
        this.refresh();
      },
      (error) => {
        if (error) {
          console.log(error.error);
        }
      }
    );     
  }

  resetForms() {
    this.isbnData = {};
    this.validationMessage = null;
  }

  refresh() {
    window.location.reload();
  }

}
