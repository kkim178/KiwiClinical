import React, { useState } from 'react';
import HomePageSidebar from './HomePageComponents/HomePageSidebar.js'
import ResearcherNavBar from './HomePageComponents/ResearcherNavBar.js'
import ResearcherTrialInfo from './HomePageComponents/ResearcherTrialInfo';
import ResearcherProfile from './HomePageComponents/ResearcherProfile.js';

import { useAppContext } from '../App.js'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function ResearcherHome(){
    const navigate = useNavigate()
    const [module, setCurrentModule] = useState("trial_info");
    const { email, setEmail } = useAppContext();

    console.log("current email: " + email);

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

    useEffect(() => {
        console.log("email has changed to " + email);
    }, [email]);

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


    const [trials, setTrials] = useState([]);

    //-------------------------------------------------------------------------------------------
    async function getTrials(formInfo) {
        //setLoading(true);
        console.log("get request initiated")
        await axios.get('https://hip-tires-pick.tunnelapp.dev/trials' , formInfo)
          .then((response) => {
            console.log(response.data);
            setTrials(response.data);
            // TODO: refresh?
            navigate('/researcherhome')
          }).catch((error) => {
            console.error('Error:', error);
          }).finally(() => {
              //setLoading(false)
            console.log("get request completed");
          })
    }


    useEffect(() => {
        const formInfo = {
            email: email
        }
       getTrials(formInfo)
    }, [])
    
    //-------------------------------------------------------------------------------------------

    return (
        // first, split the nav bar from everything else. then, split sidebar from trial info
        <div style={pageStyles}>
            <ResearcherNavBar email={email}/>
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