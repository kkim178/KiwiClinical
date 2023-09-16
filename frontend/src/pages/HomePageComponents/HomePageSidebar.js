import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

const HomePageSidebar = () => {
    const containerStyles = {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'left',
        flex: '10',
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#5a5a5a'

    }

    const iconStackStyles = {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        alignItems: "center",
        //textAlign: "center",
        margin: '20px',
        marginTop: '50px',
        color: 'white'
    }

    return (
        <div
            style={containerStyles}
        >
            <div style={iconStackStyles}>
                <FontAwesomeIcon icon={faHouse} size='lg' style={{color:'#ffffff'}}/>
                <h5 className="ml-3">Home</h5>
            </div>

            <div style={iconStackStyles}>
                <FontAwesomeIcon icon={faUser} size="lg" />
                <h5 className="ml-3">My Profile</h5>
            </div>

            <div style={iconStackStyles}>
                <FontAwesomeIcon icon={faBell} size="lg" />
                <h5 className="ml-3">Notifications</h5>
            </div>

            <div style={iconStackStyles}></div>
            <div style={iconStackStyles}></div>
            <div style={iconStackStyles}></div>
            <div style={iconStackStyles}></div>
            <div style={iconStackStyles}></div>
            <div style={iconStackStyles}></div>
            
        </div>
    )
}

export default HomePageSidebar

/*
Home
Profile
Notifications
Settings
*/