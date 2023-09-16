import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white p-4 text-black border text-2xl z-50 font-bold shadow-xl flex justify-between px-20 items-center">
            <div className="flex ">
                <img src="/kiwi.png" alt="Company Logo" className="h-12"/> 
                <div className="pt-3 pl-3">
                    KiwiClinical
                </div>
            </div>
            <div className="text-green-500 space-x-4">
                <Link href="/login" className="bg-white text-black px-4 py-2 rounded-full hover:bg-green-200 transition-colors duration-300">Log In</Link>
                <Link href="/new" className="bg-[#02C344] font-Merriweather text-white rounded-full px-4 py-2 hover:bg-green-200 transition-colors duration-300">Sign Up</Link>
            </div>
        </header>
    );
}

export default Header;