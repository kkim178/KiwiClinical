from twilio.rest import Client
from text_body import TrialNotification
import os
from dotenv import load_dotenv

load_dotenv()


account_sid = os.getenv('ACCOUNT_SID')
auth_token  = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

patients = [1] #Get Data From Patient

for i in range(len(patients)):
    
    notification = TrialNotification("TITLE", "123 ADDRESS RD", "$50", "EXPLANATION OF NOTIFICATION") #replace

    message = client.messages.create(
        to="+13015809797", #replace with phone number from pt json object
        from_=os.getenv('PHONE_NUM'), 
        body=notification)
