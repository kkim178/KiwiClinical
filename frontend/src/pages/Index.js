import React from 'react';
import Header from './components/header.js';
import { Link } from 'react-router-dom';
import '../index.css';

function Index(){
    console.log("Made it to patient home component")

    return (
        <main>
            <Header></Header>
            <div className="h-[90vh] w-full bg-gradient-to-br from-green-200 to-[#02C344] flex items-center justify-center">
                <div className="flex justify-between items-center gap-48 h-screen p-10">
                    {/* Left Side */}
                    <div className="flex-col space-y-8 mb-30 pl-20">
                        <div className="flex flex-col space-y-8 mb-30 ">
                            <h1 className="text-5xl font-extrabold">Clinical Trials, Made Easy.</h1>
                            <div className="flex-col justify-left space-y-4">
                                <Link to="/new/patient/" className="bg-green-500 hover:bg-green-600 font-bold mr-5 text-white py-2 px-6 rounded transition-colors duration-300">
                                    For Volunteers
                                </Link>
                                <Link to="/new/researcher/" className="bg-green-500 hover:bg-green-600 font-bold text-white py-2 px-6 rounded transition-colors duration-300">
                                    For Researchers
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="items-center justify-center w-1/2 space-y-8 pt-16 relative"> {/* Added padding to the top */}
                        <div className="border-3 border-white w-48 h-48 animate-float rounded-full absolute">
                            <img src="/pexels-photo-8871545.webp" alt="Person 1" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="border-3 border-white w-40 h-40 animate-float rounded-full">
                            <img src="/kiwi.png" alt="Person 2" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className="border-3 border-white absolute w-[40vw] h-[40vh] animate-float rounded-full">
                            <img src="/photo-1551727974-8af20a3322f1 copy.png" alt="Person 3" className="w-full h-full object-scale-down rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
export default Index


