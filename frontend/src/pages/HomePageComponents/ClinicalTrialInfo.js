import React from 'react'

const ClinicalTrialInfo = (props) => {
    const containerStyles = {
        display: "flex",
        backgroundColor: '#d3d3d3',
        height:'100px',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '20px',
        borderRadius:'12px',
        zLayer: "5",
        boxShadow: '0px -8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.2)',

        flexDirection: "column",
        padding: "15px",

    }

    const patientsRecruitedDemo = 50
    const currentDate = new Date()

    return (
        <div
            style={containerStyles}
        >
            <h2 style={{fontWeight: "bold"}}>Aspirin Dosing: A Patient-Centric Trial Assessing Benefits and Long-term</h2>
            <h3><em>Patients Recruited: </em>{patientsRecruitedDemo}</h3>
            <h3><em>Date Created: </em>{`${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</h3>

        </div>
    )
}

export default ClinicalTrialInfo

// props: Trial name, patients recruited, date instantiated