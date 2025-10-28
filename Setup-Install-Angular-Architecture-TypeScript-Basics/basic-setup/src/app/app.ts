import { Component, Injectable, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './basics-practices/interfaces-practice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  constructor(private userService: UserService) {
    this.userService.fetchUserById(1);
  }
  protected readonly title = signal('basic-setup');
}
