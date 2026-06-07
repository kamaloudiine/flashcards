package com.kamal.quiz.controller;

import com.kamal.quiz.entity.Word;
import com.kamal.quiz.service.WordService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/words")
public class WordController {

    private final WordService wordService;

    public WordController(WordService wordService) {
        this.wordService = wordService;
    }

    @GetMapping
    public List<Word> getAllWords() {
        return wordService.getAllWords();
    }

    @PostMapping
    public Word addWord(@RequestBody Word word) {
        return wordService.saveWord(word);
    }

    @GetMapping("/random")
    public Word getRandomWord() {
        return wordService.getRandomWord();
    }
}