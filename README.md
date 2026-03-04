# English2SQL

Natural language interface to SQL databases. Converts plain English questions into optimized SQL queries using Schema-Aware RAG.

Achieves **+9% accuracy** over baseline text-to-SQL models by dynamically retrieving relevant table schemas before generation.

## Architecture

```
User Question → React Frontend → FastAPI Backend
                                      │
                              ┌───────┼───────┐
                              ▼       ▼       ▼
                          Vector    Schema   LLM
                          Store    Context   Engine
                              │       │       │
                              └───────┼───────┘
                                      ▼
                              PostgreSQL (AWS RDS)
                                      │
                                      ▼
                              JSON Result + Viz
```

## Features

- **Schema-Aware RAG**: Retrieves relevant table schemas before SQL generation — reduces hallucination
- **Role-Based Access Control**: Firebase Auth with Google OAuth
- **Interactive Visualization**: Auto-renders results as tables or charts
- **Input Sanitization**: SQL injection prevention

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Bootstrap 5, Jotai |
| Auth | Firebase (Google OAuth) |
| Backend | FastAPI, LangChain, OpenAI/Ollama |
| Database | PostgreSQL (AWS RDS) |

## Run

```bash
# Frontend
npm install && npm start

# Backend
cd backend
pip install -r requirements.txt
python server.py
```

## License

MIT
