import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  // Or(Using inject function-usefull for function based components):
  // private http = inject(HttpClient);

  getJoke() {
    return this.http
      .get('https://api.chucknorris.io/jokes/random?category=dev')
      
  }
}
