import { Component } from '@angular/core';
import { WordService } from '../word';

@Component({
  selector: 'app-quiz',
  standalone: false,
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  currentWord: any = null;
  revealed = false;

  constructor(private wordService: WordService) {}

  next() {
    this.revealed = false;
    this.wordService.getRandomWord().subscribe({
      next: (data) => this.currentWord = data,
      error: () => console.log('Error fetching word')
    });
  }

  reveal() {
    this.revealed = true;
  }
}