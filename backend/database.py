import pickle
import os

DB_FILE = "db.pkl"


def load_db():
    if os.path.exists(DB_FILE):
        with open(DB_FILE, "rb") as f:
            return pickle.load(f)
    return {"encodings": [], "users": []}


def save_db(db):
    with open(DB_FILE, "wb") as f:
        pickle.dump(db, f)