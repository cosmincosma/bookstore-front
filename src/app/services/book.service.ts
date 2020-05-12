import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

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

    deleteBook(id, isbnData){
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body : JSON.stringify(isbnData)
          };
          
        return this.httpClient.delete(this.baseUrl + "/books/book/" + id, options);
    }

    updateBookAvailability(id, availability){
        return this.httpClient.patch(this.baseUrl + "/books/book/" + id + "/availability", availability);
    }




    

}

    
