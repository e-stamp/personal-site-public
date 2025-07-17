import React, { useState, useEffect } from 'react';
import { personalInformation } from './Information.jsx';

export default function Layout({ children }) {
    const [lived, setLived] = useState(true);
    const [info, setInfo] = useState(personalInformation[0]);

    useEffect(() => {
        setInfo(lived ? personalInformation[0] : personalInformation[1]);
    }, [lived]);
    
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
                    {info.phone}  --  {info.personal_email}  --  {info.school_email}  --  {info.linkedin}  --  {info.github}
                </div>
            </footer>
        </div>
    );
}