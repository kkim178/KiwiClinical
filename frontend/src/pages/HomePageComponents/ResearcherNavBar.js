import React from 'react'
import { Link } from 'react-router-dom';


const ResearcherNavBar = () => {
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
            <div
                style = {{
                    marginRight: '20px'
                }}
            >
                <Link to="/create" className="bg-[#02C344] font-Merriweather text-white rounded-full px-4 py-2 hover:bg-green-200 transition-colors duration-300">Create New Trial</Link>
            </div>
            
        </div>
    )
}

export default ResearcherNavBar