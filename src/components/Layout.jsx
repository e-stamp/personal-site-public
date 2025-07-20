import React, { useState, useEffect } from 'react';
import useSharedInfoState from '../hooks/useSharedInfoState';
import NavBar from './siteHeader/NavBar';

export default function Layout({ children }) {
    const {info, isInfoLoading} = useSharedInfoState();
    
    
    return (
        <div className="layout min-w-2xl max-w-4xl">
            <header className="p-3 rounded-2xl bg-canopy">
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer className="p-3 rounded-2xl bg-canopy">
                <p>Contact</p>
                <div>
                    {!isInfoLoading && <>{info.phone}  --  {info.personal_email}  --  {info.school_email}  --  <a href={info.linkedin}>LinkedIn</a>  --  <a href={info.github}>GitHub</a></>}
                </div>
            </footer>
        </div>
    );
}