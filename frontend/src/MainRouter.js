import React from 'react';
import {Route, Routes} from "react-router-dom";
// import Home from './pages/PatientHome';
import pages from './pages/pages.js';
import Index from './pages/Index.js';
import PatientHome from './pages/PatientHome';
import ResearcherHome from './pages/ResearcherHome';
import SignUp from './pages/SignUp';

const tempComponent = () => {
    return (
        <h1>Hello World</h1>
    )
}

function MainRouter() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'new/'} element={<SignUp/>}/>
                <Route path={'patientHome/'} element={<PatientHome/>}/>
                <Route path={'researcherHome/'} element={<ResearcherHome/>}/>
            </Routes>
        </div>
    )
}

export default MainRouter