from fastapi import FastAPI
import cv2
from face_engine import recognize_or_register
from models import RegisterUser
from ai_engine import generate_response

app = FastAPI()


@app.get("/detect")
def detect():
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    result = recognize_or_register(frame)
    return result


@app.post("/register")
def register(user: RegisterUser):
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    result = recognize_or_register(frame, user.name, user.phone)
    return result


@app.post("/chat")
def chat(data: dict):
    response = generate_response(data["text"])
    return {"response": response}