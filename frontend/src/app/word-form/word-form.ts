import { Component } from '@angular/core';
import { WordService } from '../word';

@Component({
  selector: 'app-word-form',
  standalone: false,
  templateUrl: './word-form.html',
  styleUrl: './word-form.css',
})
export class WordForm {
  original = '';
  translation = '';
  message = '';

  constructor(private wordService: WordService) {}

  addWord() {
    this.wordService.addWord({ original: this.original, translation: this.translation })
      .subscribe({
        next: () => {
          this.message = 'Word saved!';
          this.original = '';
          this.translation = '';
        },
        error: () => {
          this.message = 'Something went wrong.';
        }
      });
  }
}