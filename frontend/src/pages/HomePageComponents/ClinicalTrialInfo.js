import React from 'react'

const ClinicalTrialInfo = (props) => {
    const containerStyles = {
        display: "flex",
        backgroundColor: '#d3d3d3',
        height:'auto',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '20px',
        borderRadius:'12px',
        zLayer: "5",
        boxShadow: '0px -8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.2)',

        flexDirection: "column",
        padding: "15px",

    }

    // const patientsRecruitedDemo = 50
    // const currentDate = new Date()

    return (
        <div
            style={containerStyles}
        >
            <h2 style={{fontWeight: "bold"}}>{props.trialInfo.name}</h2>
            <h3><em>Description: </em>{props.trialInfo.description}</h3>
            <h3><em>Compensation: </em>{props.trialInfo.compensation}</h3>
            <h3><em>Weight Range: </em>{props.trialInfo.weight_range}</h3>
            <h3><em>Height Range: </em>{props.trialInfo.height_range}</h3>
            <h3><em>Ethnicity of Subgroup: </em>{props.trialInfo.race}</h3>

        </div>
    )
}

export default ClinicalTrialInfo

// props: Trial name, patients recruited, date instantiated