import { Component, OnInit } from '@angular/core';
import { WordService } from '../word';

@Component({
  selector: 'app-word-list',
  standalone: false,
  templateUrl: './word-list.html',
  styleUrl: './word-list.css',
})
export class WordList implements OnInit {
  words: any[] = [];

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.wordService.getWords().subscribe({
      next: (data) => this.words = data,
      error: () => console.log('Error fetching words')
    });
  }
}