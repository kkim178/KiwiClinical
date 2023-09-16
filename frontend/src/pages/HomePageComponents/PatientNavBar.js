import React from 'react'
import { Link } from 'react-router-dom';


const PatientNavBar = () => {
    const containerStyles = {
        display: "flex",
        flexDirection: "row",
        flex: '50',
        justifyContent: "space-between",
        alignItems: "center",
        zLayer: "10"
        
    }

    return (
        <div
            style={containerStyles}
        >
            <div
                style = {{
                    marginLeft: '20px',
                    fontWeight: 'bold'
                }}
            >
                <h1>KiwiClinical Research Portal</h1>
            </div>
            
        </div>
    )
}

export default PatientNavBar