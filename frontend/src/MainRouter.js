import React from 'react';
import {Route, Routes} from "react-router-dom";
// import Home from './pages/PatientHome';
import pages from './pages/pages.js';
import Index from './pages/Index.js';

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
                <Route path={'new/'} element={pages.SignUp}/>
                <Route path={'patientHome/'} element={pages.PatientHome}/>
                <Route path={'researcherHome/'} element={pages.ResearcherHome}/>
            </Routes>
        </div>
    )
}

export default MainRouter