import React from 'react'
import { Button } from '@mui/material';

const ResearcherNavBar = () => {
    const containerStyles = {
        display: "flex",
        flexDirection: "row",
        flex: '50',
        justifyContent: "space-between",
        alignItems: "center"
        
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
                <Button 
                    variant="contained"
                    onClick={() => {
                        // TODO: Insert new trial page here
                    }}
                >
                    Create New Trial
                </Button>
            </div>
            
        </div>
    )
}

export default ResearcherNavBar