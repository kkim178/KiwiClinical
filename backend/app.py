from flask import Flask
from flask import request, jsonify
import os
import configparser
from db import get_clinician, get_patient_data,add_clinician,add_patient, add_trial, get_trial_data, get_update_patient, update_patients, get_patients
from flask_cors import CORS

app = Flask(__name__, static_url_path='/')
CORS(app)
@app.route('/clinician', methods=['GET'])
def api_get_clinician():
    clinician_data = get_clinician(request.args.get('email'))
    return jsonify(list(clinician_data))

@app.route('/patient', methods=['GET'])
def api_get_patient():
    patient_data = get_patient_data(request.args.get('email'))
    return jsonify(list(patient_data))

@app.route('/trials', methods=['GET'])
def api_get_trials():
    trial_data = get_trial_data(request.args.get('email'))
    return jsonify(list(trial_data))

@app.route('/clinician_post', methods=["POST"])
def api_post_clinician():
    """
    organization_name,   
    first name
    last name,
    trial_list
    patient_list
    email
    """
    post_data = request.get_json()
    try:
        add_clinician(post_data.get('organization_name'),post_data.get('first_name'),post_data.get('last_name')
                      , post_data.get('trial_list'), post_data.get('patient_list'), post_data.get('email'))
 
        updated_clinician = get_clinician(post_data.get('email'))
        
        return jsonify(list(updated_clinician)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/patient_post', methods=["POST"])
def api_post_patient():
    """
    age, 
    race, 
    weight, 
    height, 
    phoneumber, 
    Email
    """
    post_data = request.get_json()
    try:
        add_patient(post_data.get('age'),post_data.get('race'), post_data.get('weight')
                      , post_data.get('height'), post_data.get('phone_number'), post_data.get('email'))
 
        updated_patient = get_patient_data(post_data.get('email'))
        return jsonify(list(updated_patient)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
@app.route('/trial_post', methods=["POST"])
def api_post_trial():
    """
    -Clinician email
    -Name of trial, 
    -Text Area (Describe Trial), 
    -Monetary Compensation, 
    -Race, 
    -Weight Range, 
    -Height Range
    """
    post_data = request.get_json()
    try:
        add_trial(post_data.get('email'), post_data.get('name'),post_data.get('description'), post_data.get('compensation')
                    , post_data.get('weight_range'), post_data.get('height_range'), post_data.get('race'))
 
        updated_patient = get_trial_data(post_data.get('email'))
        return jsonify(list(updated_patient)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
@app.route('/update_patient_list', methods=["POST"])
def api_update_patient_list():
    """
   age, 
    race, 
    weight, 
    height, 
    phoneumber, 
    Email
    """
    post_data = request.get_json()
    try:
        update_patients(post_data.get('clientEmail'), post_data.get('age'), post_data.get('race'),post_data.get('weight'), post_data.get('height')
                    , post_data.get('phone_number'), post_data.get('email'))
 
        updated_patient = get_update_patient(post_data.get('clientEmail'))
        return jsonify(list(updated_patient)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/get_patient_list', methods=["GET"])
def api_get_patient_list():
    patient_list = get_update_patient(request.args.get('email'))
    return jsonify(list(patient_list))

@app.route('/get_patients', methods=["GET"])
def api_get_patients():
    patient_list = get_patients()
    return jsonify(list(patient_list))

config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join(".ini")))

if __name__ == '__main__':
    app.config['MONGO_URI'] = config['DB_URI']
    app.run(host="0.0.0.0", port=5000)
