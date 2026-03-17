import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Note } from "./models/note.model";
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  handleSubscribe() {
    alert('everything is working!');
    console.log('everything is working!');
  }

  protected readonly notes = signal<Note[]>([
    { id: 1, title: 'Note1', content: 'Note1', createdAt: new Date() },
    { id: 2, title: 'Note2', content: 'Note2', createdAt: new Date() },
    { id: 3, title: 'Note3', content: 'Note3', createdAt: new Date() },
  ])
}
