import bson

from flask import current_app, g
from werkzeug.local import LocalProxy
from flask_pymongo import PyMongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo.errors import DuplicateKeyError, OperationFailure
from bson.objectid import ObjectId
from bson.errors import InvalidId


def get_db():
    uri = "mongodb+srv://bgbhophacks23:bgbhophack23@cluster0.ofzbjbq.mongodb.net/?retryWrites=true&w=majority"

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
    return client


# Use LocalProxy to read the global db instance with just `db`
db = get_db().KiwiDB

def add_clinician(organization_name , first_name, last_name, trial_list, patient_list, email):
    """
    Inserts a comment into the Clinician collection, with the following fields:

    -Organization Name, 
    -first name, 
    -last name,
    -Education, 
    -List of Trials Working
    -List of Patients

    """
    
    clinician_data = { 'organization_name' : organization_name, 'first_name' : first_name, 'last_name': last_name, 'trial_list' : trial_list, 'patient_list' : patient_list, "email": email}
    return db.Clinician.insert_one(clinician_data)

def get_clinician(email):
    projection = {'_id': False}
    clinician_data = db.Clinician.find({'email' : email}, projection)
    return clinician_data
def add_patient(age , race , weight, height, phone_number, email):
    """
    Inserts a comment into the Clinician collection, with the following fields:

    -Age, 
    -Race, 
    -Weight, 
    -Height, 
    -Phone Number, 
    -Email
	-Object ID

    """
    
    patient_data = { 'age' : age, 'race' : race, 'weight' : weight, 'height' : height, 'phone_number' : phone_number, 'email': email}
    return db.Patient.insert_one(patient_data)
def get_patient_data(email):
    projection = {'_id': False}
    clinician_data = db.Patient.find({'email': email}, projection)
    return clinician_data
def add_trial(clinicianEmail, name, description , compensation, weight_range, height_range, race):
    """
    Inserts a comment into the Clinician collection, with the following fields:

    -Name of trial, 
    -Text Area (Describe Trial), 
    -Monetary Compensation, 
    -Race, 
    -Weight Range, 
    -Height Range

    """
    
    trial_data = { 'name' : name, 'description' : description, 'compensation' : compensation, 'weight_range': weight_range, 'height_range': height_range, 'race' : race}
    filter_criteria = {'email': clinicianEmail}
    update_operation = {'$push': {'trial_list': trial_data}}
    return db.Clinician.update_one(filter_criteria, update_operation)

def get_trial_data(email):
    projection = {'_id': False, 'trial_list': True}
    trial_data = db.Clinician.find({'email': email}, projection)
    return trial_data
def update_patients(clinicianEmail, age, race, weight, height, phone_number, email):
    """
    Inserts a comment into the Clinician collection, with the following fields:

    -Name of trial, 
    -Text Area (Describe Trial), 
    -Monetary Compensation, 
    -Race, 
    -Weight Range, 
    -Height Range

    """

    patient_data = { 'age' : age, 'race' : race, 'weight' : weight, 'height': height, 'phone_number': phone_number, 'email' : email}
    filter_criteria = {'email': clinicianEmail}
    update_operation = {'$push': {'patient_list': patient_data}}
    return db.Clinician.update_one(filter_criteria, update_operation)

def get_update_patient(email):
    projection = {'_id': False, 'patient_list': True}
    patient_list_data = db.Clinician.find({'email': email}, projection)
    return patient_list_data

