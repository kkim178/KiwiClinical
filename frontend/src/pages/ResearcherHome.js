import React from 'react';
import HomePageSidebar from './HomePageComponents/HomePageSidebar.js'
import ResearcherNavBar from './HomePageComponents/ResearcherNavBar.js'
import ResearcherTrialInfo from './HomePageComponents/ResearcherTrialInfo';

function ResearcherHome(){
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

    return (
        // first, split the nav bar from everything else. then, split sidebar from trial info
        <div style={pageStyles}>
            <ResearcherNavBar/>
            {/*----------------------------------------------------------------------------------------*/}
            <div style={bottomPageStyles}>
                <HomePageSidebar/>
                <ResearcherTrialInfo/>
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