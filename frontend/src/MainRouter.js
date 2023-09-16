import React from 'react';
import {Route, Routes} from "react-router-dom";
// import Home from './pages/PatientHome';
// import pages from './pages/js';
import Index from './pages/Index.js';
import PatientHome from './pages/PatientHome.js';
import ResearcherHome from './pages/ResearcherHome.js';
import SignUp from './pages/SignUp';
import SignUpWindowBase from './pages/SignUpComponents/SignUpWindowBase.js';
import SignIn from './pages/SignIn.js';
import Create from './pages/CreateTrial.js';


function MainRouter() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'new/'} element={<SignUp/>}/>
                <Route path={'new/patient/'} element={<SignUpWindowBase isPatient={true}/>}/>
                <Route path={'new/researcher/'} element={<SignUpWindowBase isPatient={false}/>}/>
                <Route path={'patientHome/'} element={<PatientHome/>}/>
                <Route path={'researcherHome/'} element={<ResearcherHome/>}/>
                <Route path={'login/'} element={<SignIn/>}/>
                <Route path={'create/'} element={<Create/>}/>
            </Routes>
        </div>
    )
}

export default MainRouter