package com.kamal.quiz.repository;

import com.kamal.quiz.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordRepository extends JpaRepository<Word, Long> {
}