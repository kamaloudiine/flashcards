Welcome to the flashcards project.

It is a fullstack flashcard app for vocabulary learning.

## Features

- Add words with their translation
- View all saved words in a list
- Quiz mode: get a random word and reveal its translation

## Tech stack

- **Backend**: Java, Spring Boot, Spring Data JPA
- **Frontend**: Angular, TypeScript
- **Database**: PostgreSQL
- **DevOps**: Docker, Docker Compose, GitHub Actions (CI/CD)

## How to run locally

### Prerequisites
- Java 17
- Node.js
- Docker Desktop

### 1. Start the database
```bash
docker compose up -d
```

### 2. Start the backend
Open the project in IntelliJ and run `QuizApplication.java`.

The API will be available at `http://localhost:8080`.

### 3. Start the frontend
```bash
cd frontend
ng serve
```

The app will be available at `http://localhost:4200`.

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /words | Get all words |
| POST | /words | Add a new word |
| GET | /words/random | Get a random word |
