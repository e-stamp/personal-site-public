import React, { useState, useEffect } from 'react';
import useSharedInfoState from '../hooks/useSharedInfoState';
import NavBar from './siteHeader/NavBar';
import { FaGithub, FaLinkedin, FaEnvelope, FaSchool } from "react-icons/fa";

export default function Layout({ children }) {
    const {info, isInfoLoading} = useSharedInfoState();
    
    
    return (
        <div className="layout min-w-2xl max-w-4xl flex flex-col">
            <header className="leaf p-3 bg-center"
            >
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer className="leaf p-3 bg-center"
            >
                <h2 className="text-2xl mb-2">Contact</h2>
                <div>
                    {!isInfoLoading && 
                        <div className="pl-8 pr-8 flex flex-row flex-nowrap justify-around items-center">
                            <div>
                                <div className="flex flex-row flex-nowrap items-center gap-1.5"><FaEnvelope /><p>{info.email}</p></div>
                                <div className="flex flex-row flex-nowrap items-center gap-1.5"><FaSchool /><p>{info.school_email}</p></div>
                            </div>
                            <div>
                                <div className="flex flex-row flex-nowrap items-center gap-1.5"><FaLinkedin /><a href={info.linkedin}>LinkedIn</a></div>
                                <div className="flex flex-row flex-nowrap items-center gap-1.5"><FaGithub /><a href={info.github}>GitHub</a></div>
                            </div>
                        </div>}
                </div>
            </footer>
        </div>
    );
}