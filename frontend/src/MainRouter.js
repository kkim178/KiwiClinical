import React from 'react';
import {Route, Routes} from "react-router-dom";
// import Home from './pages/PatientHome';
// import pages from './pages/js';
import Index from './pages/Index.js';
import PatientHome from './pages/PatientHome';
import ResearcherHome from './pages/ResearcherHome';
import SignUp from './pages/SignUp';
import SignUpWindowBase from './pages/SignUpComponents/SignUpWindowBase.js';


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
            </Routes>
        </div>
    )
}

export default MainRouter