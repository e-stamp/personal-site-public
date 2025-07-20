import React, { useState, useEffect } from 'react';
import useSharedInfoState from '../hooks/useSharedInfoState';
import NavBar from './siteHeader/NavBar';

export default function Layout({ children }) {
    const {info, isInfoLoading} = useSharedInfoState();
    
    
    return (
        <div className="layout min-w-2xl max-w-4xl">
            <header className="p-3 rounded-2xl bg-canopy 
                               shadow-md shadow-dark-green text-shadow-sm text-shadow-timber 
                               border-b-2 border-r-1 border-deep-green 
                               bg-[url(/leaf_vein.png)] bg-blend-soft-light bg-center"
            >
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer className="p-3 rounded-2xl bg-canopy
                               shadow-md shadow-dark-green text-shadow-sm text-shadow-timber 
                               border-b-2 border-r-1 border-deep-green 
                               bg-[url(/leaf_vein.png)] bg-blend-soft-light bg-center"
            >
                <h2 className="text-2xl mb-2">Contact</h2>
                <div>
                    {!isInfoLoading && 
                        <div className="pl-8 pr-8 flex flex-row flex-nowrap justify-between items-center">
                            <p>{info.phone}</p>
                            <p>{info.personal_email}</p>
                            <p>{info.school_email}</p>
                            <a href={info.linkedin}>LinkedIn</a>
                            <a href={info.github}>GitHub</a>
                        </div>}
                </div>
            </footer>
        </div>
    );
}