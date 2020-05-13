import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Statistics } from '../models/statistics';

@Component({
  selector: 'bs-statistics',
  templateUrl: './statistics.component.html',
  styles: [
  ]
})
export class StatisticsComponent implements OnInit {

  statistics : Statistics = new Statistics();

  areNoBooks : boolean = false;

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.getStatistics().subscribe(
      (resp : Statistics) => {
        this.statistics = resp;
        console.log(resp)
      },
      (error) => {
        if (error) {
          if(error.error["message"]) {
            this.areNoBooks = true;
          }
        }
      }
    )
  }

}
