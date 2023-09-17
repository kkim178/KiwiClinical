import os
from twilio.rest import Client
from flask import Flask
from flask import request
from twilio.twiml.messaging_response import MessagingResponse
from dotenv import load_dotenv


load_dotenv()


account_sid = os.getenv('ACCOUNT_SID')
auth_token  = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

app = Flask(__name__)

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    # Get Message
    message = client.messages.list(limit=1)[0]
    message_text = message.body

    # Get The Number of Reciever
    user_num = message.from_
    accepted_msg = "RSVP NOTED"
    
    # Text Reciever if RSVP added
    if message_text == "RSVP":
        client.messages.create(
            to=user_num,
            from_=os.getenv('PHONE_NUM'), 
            body=accepted_msg)

    

    # Start our TwiML response
    resp = MessagingResponse()

    # Add a message
    resp.message()

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)