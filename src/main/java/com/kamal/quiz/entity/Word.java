package com.kamal.quiz.entity;

import jakarta.persistence.*;

@Entity
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String original;
    private String translation;

    public Long getId() { return id; }
    public String getOriginal() { return original; }
    public String getTranslation() { return translation; }

    public void setId(Long id) { this.id = id; }
    public void setOriginal(String original) { this.original = original; }
    public void setTranslation(String translation) { this.translation = translation; }
}