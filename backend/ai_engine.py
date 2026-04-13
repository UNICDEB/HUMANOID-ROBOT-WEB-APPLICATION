def generate_response(text):
    text = text.lower()

    if "hello" in text:
        return "Hello! How can I help you?"

    if "phone" in text:
        return "Here is the contact number: 9876543210"

    if "help" in text:
        return "I can guide you to people or provide information"

    return "I am here to assist you"