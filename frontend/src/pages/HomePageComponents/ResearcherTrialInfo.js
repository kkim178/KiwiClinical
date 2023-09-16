import React from 'react'
import ClinicalTrialInfo from './ClinicalTrialInfo'

const ResearcherTrialInfo = () => {
    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#d3d3d3',
        flex: '90',
        overflowY: 'scroll'
    }

    return (
        <div
            style={containerStyles}
        >
            <ClinicalTrialInfo/>
            <ClinicalTrialInfo/>
            <ClinicalTrialInfo/>
            
            
          
            
        </div>
    )
}

export default ResearcherTrialInfo

// component for trial