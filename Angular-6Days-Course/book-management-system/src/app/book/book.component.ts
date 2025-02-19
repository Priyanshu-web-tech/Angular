import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  newBookTitle: string = '';
  newBookAuthor: string = '';

  books: Book[] = [];

  ngOnInit(): void {
    const books = localStorage.getItem('books');
    if (books) {
      this.books = JSON.parse(books);
    }
  }
  addBook() {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      };

      this.books.push(newBook);

      this.newBookTitle = '';
      this.newBookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
