import React, { useState } from 'react';
import SignUpWindowPatient from './SignUpWindowPatient'
import SignUpWindowResearcher from './SignUpWindowResearcher'

const PatientInfo = () => {
    const containerStyle = {
        border: '0px solid #007BFF', // Add a border with a blue color
        borderRadius: '8px', // Add rounded corners
        margin: '50px',
        flex: '1',
        flexDirection: 'column',
        padding: '20px', // Add padding for spacing
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center-align text
        boxShadow: '0px -8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.2)',
    }

    const titleStyle = {
    fontSize: '24px', // Increase the font size for the title
    color: '#02c346', // Use the same blue color for the title
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
            <li style={listItemStyle}><strong>Anonymous Data Security:</strong> Your privacy is our priority. Benefit from our rigorous data security protocols that keep your information anonymous and protected.</li>
            <li style={listItemStyle}><strong>Personalized Study Matches:</strong> Discover research opportunities that matter to <em>you</em>. Our platform uses cutting-edge algorithms to match you with clinical studies tailored to your health and interests. </li>
            <li style={listItemStyle}><strong>Empower Medical Progress:</strong> Join a community dedicated to advancing healthcare. Participate in clinical studies and help shape the future of medicine while gaining access to innovative, cutting-edge treatments.</li>
        </ul>
        </div>
    );
}

const ResearcherInfo = () => {
    const containerStyle = {
        border: '0px solid #007BFF', // Add a border with a blue color
        borderRadius: '8px', // Add rounded corners
        margin: '50px',
        flex: '1',
        flexDirection: 'column',
        padding: '20px', // Add padding for spacing
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center-align text
        boxShadow: '0px -8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.2)',
    }

    const titleStyle = {
    fontSize: '24px', // Increase the font size for the title
    color: '#02c346', // Use the same green color for the title
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
            <li style={listItemStyle}><strong>Targeted Participant Matching:</strong> Benefit from our advanced matching algorithms that pair you with qualified patients who meet your study criteria.</li>
            <li style={listItemStyle}><strong>Streamlined Recruitment:</strong> Simplify your recruitment process. Save time and resources as our platform automates participant recruitment, allowing you to focus on your research -- not paperwork!</li>
            <li style={listItemStyle}><strong>Data Security and Anonymity:</strong> Rest assured with our data security measures. Conduct research with confidence, knowing that patient data remains anonymous and confidential.</li>
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