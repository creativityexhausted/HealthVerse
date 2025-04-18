from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()
qa_pipeline = pipeline("question-answering")

class Question(BaseModel):
    question: str
    context: str

@app.post("/ask")
def ask_question(q: Question):
    result = qa_pipeline(question=q.question, context=q.context)
    return {"answer": result["answer"]}