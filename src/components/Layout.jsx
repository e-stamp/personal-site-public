import React, { useState, useEffect } from 'react';
import useSharedInfoState from '../hooks/useSharedInfoState';

export default function Layout({ children }) {
    const {info, isInfoLoading} = useSharedInfoState();
    
    
    return (
        <div className="layout">
            <header>
                <h1>My Website</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Contact</p>
                <div>
                    {!isInfoLoading && <>{info.phone}  --  {info.personal_email}  --  {info.school_email}  --  <a href={info.linkedin}>LinkedIn</a>  --  <a href={info.github}>GitHub</a></>}
                </div>
            </footer>
        </div>
    );
}