from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse

    
app = Flask(__name__)
    
@app.route("/sms", methods=['POST'])
def sms_reply():
        
    # Use this data in your application logic
    from_number = request.form['From']
    to_number = request.form['To']
    body = request.form['Body']
    
    # Start our TwiML response
    resp = MessagingResponse()
    
    # Add a message
    resp.message("The Robots are coming! Head for the hills!")
    
    return str(resp)
    
if __name__ == "__main__":
    app.run(debug=True)
