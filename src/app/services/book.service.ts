import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

    baseUrl = 'http://localhost:8080/api';
    constructor(private httpClient: HttpClient){}

    countBooks(){
        return this.httpClient.get(this.baseUrl + "/books/count");
    }

    getBook(id){
        return this.httpClient.get(this.baseUrl + "/books/book/" + id);
    }

    getAllBooks(){
        return this.httpClient.get(this.baseUrl + "/books");
    }

    addBook(book){
        return this.httpClient.post(this.baseUrl + "/books", book);
    }

}

    
