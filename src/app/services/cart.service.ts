import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: '*',
    }),
  };

  constructor(private http: HttpClient) {}

  // Static Data
  addToCart(user) {
    this.items.push(user);
    console.log('users Length : ', this.items.length);
  }
  getAllUsers() {
    return this.items;
  }
  clearUsers() {
    this.items = [];
    console.log('users Length : ', this.items.length);
  }

  // From Api

  getAllDataFromApi(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
