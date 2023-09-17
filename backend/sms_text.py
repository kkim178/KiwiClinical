from twilio.rest import Client
from TrialNotification import TrialNotification
import os
from dotenv import load_dotenv

load_dotenv()


account_sid = os.getenv('ACCOUNT_SID')
auth_token  = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

def sms_text(patients, specifications):
    print('TEST WORKING!!!!!')

    notification = TrialNotification(specifications["name"], specifications["compensation"], specifications["description"])

    for i in range(len(patients)):
        if valid_user(patients[i], specifications): 
            print("ARE YOU CALLED?!?!")
            
            message = client.messages.create(
                to=patients[i]['phone_number'], #replace with phone number from pt json object
                from_=os.getenv('PHONE_NUM'), 
                body=notification)
    
        
def valid_user(patient, specifications):
    # Get weight to check it matches
    w_list = specifications['weight_range'].split('-')
    w_min = 0
    w_max = 0
    if (int(w_list[1]) > int(w_list[0])):
        w_min = int(w_list[0])
        w_max = int(w_list[1])
    else:
        w_min = int(w_list[1])
        w_max = int(w_list[0])


    weight_confirm = (int(patient['weight']) <= w_max) and (int(patient['weight']) >= w_min)

    # height match
    h_list = specifications['height_range'].split('-')
    h_min = 0
    h_max = 0
    if (int(h_list[1]) > int(h_list[0])):
        h_min = int(h_list[0])
        h_max = int(h_list[1])
    else:
        h_min = int(h_list[1])
        h_max = int(h_list[0])

    height_confirm = (int(patient['height']) <= h_max) and (int(patient['height']) >= h_min) 

    # checks
    race_confirm = False
    if patient['race'] in specifications['race']:
        race_confirm = True

    if (weight_confirm and height_confirm and race_confirm):
        return True

    return False
