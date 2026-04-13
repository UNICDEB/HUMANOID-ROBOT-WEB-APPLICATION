import cv2
import face_recognition
from database import load_db, save_db


db = load_db()


def recognize_or_register(frame, name=None, phone=None):
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    locations = face_recognition.face_locations(rgb)
    encodings = face_recognition.face_encodings(rgb, locations)

    results = []

    for encoding in encodings:
        if len(db["encodings"]) > 0:
            matches = face_recognition.compare_faces(db["encodings"], encoding)

            if True in matches:
                idx = matches.index(True)
                user = db["users"][idx]
                return {"status": "recognized", "user": user}

        # REGISTER
        if name and phone:
            db["encodings"].append(encoding)
            user = {"name": name, "phone": phone}
            db["users"].append(user)
            save_db(db)
            return {"status": "registered", "user": user}

    return {"status": "unknown"}