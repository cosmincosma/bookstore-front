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
  ]
})
export class BookDetailsComponent implements OnInit {

  book;

  constructor(private router: Router, 
    private bookService: BookService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .pipe(map(params => params['bookId']))
    .pipe(switchMap(id => this.bookService.getBook(id)))
    .subscribe(
      resp => {
        this.book = resp;
      }
    );
  }

  deleteBook(){
    //REST API
    this.router.navigate(['/book-list']);     
  }

}
