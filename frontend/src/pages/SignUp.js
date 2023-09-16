import React, { useState } from 'react';
import { Button } from '@mui/material';
import SignUpWindowPatient from './SignUpComponents/SignUpWindowPatient.js'
import SignUpWindowResearcher from './SignUpComponents/SignUpWindowResearcher.js'



const ChoiceButton = (props) => {
    return (
        <Button 
            variant="contained"
            onClick = {() => {
                if (props.buttonText === "Patient") {
                    props.setIsPatient(true);
                } else if (props.buttonText === "Researcher") {
                    props.setIsPatient(false);
                } else {
                    console.log("Error :(");
                }


                props.setChosen(true);
            }}
        >
            {props.buttonText}
        </Button>
    )
}

// accepts "setChosen" function which changes the state in SignUp to true after picking
const PatientOrResearcher = (props) => {
    return (
        <div>
            <h2>Are you a...</h2>
            <ChoiceButton buttonText="Patient" setChosen={props.setChosen} setIsPatient={props.setIsPatient}/>
            <ChoiceButton buttonText="Researcher" setChosen={props.setChosen} setIsPatient={props.setIsPatient}/>
            
        </div>
    )
}


function SignUp(){
    const [isPatient, setIsPatient] = useState(null);       // this state will keep track of whether the current user is a patient or doctor
    const [chosen, setChosen] = useState(false);            // this state will keep track of whether the current user has decided who they are
                                                            //      when it is 'false', PatientOrResearcher should be displayed, allowing the user to choose
                                                            //      when it is 'true', the appropriate sign-up window should be displayed

    console.log("hello world");

    return (chosen ? (
    //-----------IF CHOSEN IS TRUE---------------
        isPatient ? (<SignUpWindowPatient/>) : (<SignUpWindowResearcher/>)
    //----------IF CHOSEN IS FALSE---------------
    ) : (
        <div>
            <h1>Sign up page</h1>
            <PatientOrResearcher setChosen={setChosen} setIsPatient={setIsPatient}/>
        </div>
    ))

    
}
export default SignUp

/**
 * sign up page:
 * 
 * "are you a..."
 * 
 * -> patient
 * -> clinician
 * 
 * email address, password, sign up button (should redirect to appropriate homepage)
 */