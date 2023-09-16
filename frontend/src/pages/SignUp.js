import React, { useState } from 'react';
import { Button } from '@mui/material';
import SignUpWindowBase from './SignUpComponents/SignUpWindowBase.js';



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
        <SignUpWindowBase isPatient={isPatient}/>
    //----------IF CHOSEN IS FALSE---------------
    ) : (
        <div>
            <h1>Welcome to Kiwi Clinical!</h1>
            <h2>Before we sign you up, we'd like to know a little more about you...</h2>
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