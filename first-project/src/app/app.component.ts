import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    CommonModule,
    JokeComponent,
    AComponent,
    B1Component,
  ],
  templateUrl: './app.component.html',
  // template: ` <h1>{{ title }}</h1> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project';
  users = [
    { name: 'Priyanshu', isSingle: true, salary: 5000 },
    { name: 'John', isSingle: false, salary: 50000 },
    { name: 'Doe', isSingle: true, salary: 60000 },
  ];

  receivedData(e: User) {
    console.log(e);

    const userIndex = this.users.findIndex((user) => user.name === e.name);
    this.users[userIndex].salary = e.newSalary;
  }

  clear() {
    this.users = [];
  }
}
