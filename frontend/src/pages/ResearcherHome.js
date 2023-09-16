import React, { useState } from 'react';
import HomePageSidebar from './HomePageComponents/HomePageSidebar.js'
import ResearcherNavBar from './HomePageComponents/ResearcherNavBar.js'
import ResearcherTrialInfo from './HomePageComponents/ResearcherTrialInfo';
import ResearcherProfile from './HomePageComponents/ResearcherProfile.js';

function ResearcherHome(){
    const [module, setCurrentModule] = useState("trial_info");

    const pageStyles = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '100vh',
    }

    const bottomPageStyles = {
        flex: '93',
        display: 'flex',
        flexDirection: 'row'
    }

    let content = null;

    switch (module) {
        case "trial_info":
            content = (
                <ResearcherTrialInfo/>
            );
            break;
        case "profile":
            content = (
                <ResearcherProfile/>
            );
            break;
        default:
            content = (
                <ResearcherTrialInfo/>
            )
            break;

    }

    return (
        // first, split the nav bar from everything else. then, split sidebar from trial info
        <div style={pageStyles}>
            <ResearcherNavBar/>
            {/*----------------------------------------------------------------------------------------*/}
            <div style={bottomPageStyles}>
                <HomePageSidebar setCurrentModule={setCurrentModule}/>
                {content}
            </div>
            

        </div>
    )
        
}

export default ResearcherHome

/*
components:
    - sidebar with options (maybe just settings for now?)
    -top bar with basic info (login info, create trial button)
    - list of current active trials (this will take up most of the screen)
    
pages:
    - "create clinical trial"
*/