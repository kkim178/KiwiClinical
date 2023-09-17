import React from 'react'
import ClinicalTrialInfo from './ClinicalTrialInfo'

const ResearcherTrialInfo = (props) => {
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

            {props.trials !== null && props.trials.map(trial => {
                return <ClinicalTrialInfo trialInfo={trial}/>
            })}
            
            
          
            
        </div>
    )
}

export default ResearcherTrialInfo

// component for trial