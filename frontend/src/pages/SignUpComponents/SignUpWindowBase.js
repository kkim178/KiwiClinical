import React, { useState } from 'react';
import SignUpWindowPatient from './SignUpWindowPatient'
import SignUpWindowResearcher from './SignUpWindowResearcher'

const PatientInfo = () => {
    const containerStyle = {
        border: '2px solid #007BFF', // Add a border with a blue color
        borderRadius: '8px', // Add rounded corners
        flex: '1',
        flexDirection: 'column',
        padding: '20px', // Add padding for spacing
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center-align text
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    }

    const titleStyle = {
    fontSize: '24px', // Increase the font size for the title
    color: '#007BFF', // Use the same blue color for the title
    marginBottom: '20px', // Add space below the title
    };
    
    const listItemStyle = {
    listStyle: 'none', // Remove bullet points
    fontSize: '16px', // Set a font size for list items
    marginBottom: '10px', // Add space between list items
    };
    

    return (
        <div style={containerStyle}>
        <h1 style={titleStyle}>Sign up as a KiwiClinical patient!</h1>
        <ul>
            <li style={listItemStyle}>Privacy: Your data stays anonymous in our system</li>
            <li style={listItemStyle}>Automatic Matching: We match you with appropriate clinical studies for free!</li>
            <li style={listItemStyle}>Cutting-Edge Research: Contribute to cutting-edge medical research and advancements.</li>
        </ul>
        </div>
    );
}

const ResearcherInfo = () => {
    const containerStyle = {
        border: '2px solid #007BFF', // Add a border with a blue color
        borderRadius: '8px', // Add rounded corners
        flex: '1',
        flexDirection: 'column',
        padding: '20px', // Add padding for spacing
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center-align text
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    }

    const titleStyle = {
    fontSize: '24px', // Increase the font size for the title
    color: '#007BFF', // Use the same blue color for the title
    marginBottom: '20px', // Add space below the title
    };
    
    const listItemStyle = {
    listStyle: 'none', // Remove bullet points
    fontSize: '16px', // Set a font size for list items
    marginBottom: '10px', // Add space between list items
    };
    

    return (
        <div style={containerStyle}>
        <h1 style={titleStyle}>Sign up as a KiwiClinical researcher!</h1>
        <ul>
            <li style={listItemStyle}>benefit #1</li>
            <li style={listItemStyle}>Automatic Matching: We match your studys' needs with patients for free!</li>
            <li style={listItemStyle}>Cutting-Edge Research: Contribute to cutting-edge medical research and advancements.</li>
        </ul>
        </div>
    );
}

const SignUpWindowBase = (props) => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        width:'100%',
    }

    const smallContainerStyle = {
        flex: '1',
        border: '2px solid',
        minHeight: '100vh', // Ensure the container spans the viewport height

    }

    return (props.isPatient ? (
        <div style={containerStyle}>
            <SignUpWindowPatient style={smallContainerStyle}/>
            <PatientInfo/>
        </div>
        
    ) : (
        <div style={containerStyle}>
            <SignUpWindowResearcher style={smallContainerStyle}/>
            <ResearcherInfo/>
        </div>
        
    ))
}

export default SignUpWindowBase