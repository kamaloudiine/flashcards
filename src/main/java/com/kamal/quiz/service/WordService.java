package com.kamal.quiz.service;

import com.kamal.quiz.entity.Word;
import com.kamal.quiz.repository.WordRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class WordService {

    private final WordRepository wordRepository;

    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    public List<Word> getAllWords() {
        return wordRepository.findAll();
    }

    public Word saveWord(Word word) {
        return wordRepository.save(word);
    }

    public Word getRandomWord() {
        List<Word> words = wordRepository.findAll();
        return words.get(new Random().nextInt(words.size()));
    }
}