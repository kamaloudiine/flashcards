import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordForm } from './word-form';

describe('WordForm', () => {
  let component: WordForm;
  let fixture: ComponentFixture<WordForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordForm],
    }).compileComponents();

    fixture = TestBed.createComponent(WordForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
