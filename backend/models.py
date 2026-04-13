from pydantic import BaseModel

class RegisterUser(BaseModel):
    name: str
    phone: str