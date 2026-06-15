import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WordForm } from './word-form/word-form';
import { WordList } from './word-list/word-list';
import { Quiz } from './quiz/quiz';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, WordForm, WordList, Quiz],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
