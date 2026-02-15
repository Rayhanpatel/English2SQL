from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="English2SQL Backend")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DatabaseConnection(BaseModel):
    db_type: str
    host: str
    port: str
    database: str
    user: str
    password: str

class QueryRequest(BaseModel):
    query: str

@app.get("/")
def read_root():
    return {"status": "ok", "message": "English2SQL Backend is running"}

@app.post("/database")
def connect_database(conn: DatabaseConnection):
    # Mock connection success
    # In a real app, this would verify credentials
    print(f"Connecting to {conn.db_type} at {conn.host}:{conn.port}...")
    return {
        "status": "success",
        "message": f"Successfully connected to {conn.database}",
        "schema": [
            "users (id, name, email)",
            "orders (id, user_id, amount, date)",
            "products (id, name, price)"
        ]
    }

@app.post("/generate_sql")
def generate_sql(request: QueryRequest):
    # Mock LLM generation
    # Simulating a call to OpenAI/Gemini
    print(f"Generating SQL for: {request.query}")
    
    mock_sql = f"SELECT * FROM users WHERE email LIKE '%{request.query.split()[-1]}%';"
    if "count" in request.query.lower():
        mock_sql = "SELECT COUNT(*) FROM orders;"
    elif "sum" in request.query.lower():
        mock_sql = "SELECT SUM(amount) FROM orders;"
    
    return {"sql_query": mock_sql}

@app.post("/run_query")
def run_query(request: QueryRequest):
    # Mock execution results
    # QueryRequest here contains the SQL, not the NL query
    sql = request.query
    print(f"Executing SQL: {sql}")
    
    # Return mock data rows based on simple heuristics
    if "COUNT" in sql:
        return {"data": ["42"]}
    elif "SUM" in sql:
        return {"data": ["15430.50"]}
    else:
        # Generate some random mock rows
        return {
            "data": [
                f"Row {i}: Result for {sql[:10]}..." for i in range(3)
            ]
        }

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=5000, reload=True)
