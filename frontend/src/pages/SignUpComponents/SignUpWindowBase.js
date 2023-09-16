import React, { useState } from 'react';
import SignUpWindowPatient from './SignUpWindowPatient'
import SignUpWindowResearcher from './SignUpWindowResearcher'

const SignUpWindowBase = (props) => {
    return (props.isPatient ? (
        <div>
            <h1>Patient's Sign-up Window</h1>
            <SignUpWindowPatient/>
        </div>
        
    ) : (
        <div>
            <h1>Researcher's Sign-up Window</h1>
            <SignUpWindowResearcher/>
        </div>
        
    ))
}

export default SignUpWindowBase