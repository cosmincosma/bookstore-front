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
  currentPage = 1;
  itemsPerPage = 4;
  pageSize: number;

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

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
  
}
