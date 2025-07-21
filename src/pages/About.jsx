import React, { useState, useEffect } from 'react';
import api from '../services/index';
import useSharedInfoState from '../hooks/useSharedInfoState.js';

/**
 * About Page witch dispalys information about me
 * 
 * @page About
 * 
 * @returns {JSX.Element} The rendered About page component.
 * - Displays some information about me
 */
export default function About() {
    const { info, isInfoLoading } = useSharedInfoState();

    return (
        <div>
            {!isInfoLoading &&
                <>
                    {/* Projects */}
                    <div className="p-3 mb-6">
                        <h2 className="text-2xl font-bold mb-2">About</h2>

                        <div className="leaf p-3 mb-6">
                            {/* inset image placeholder underneath the droplet class */}
                            <h3 className="text-2xl font-semibold mt-3">{info.first_name} {info.last_name}</h3>
                            <h4 className="text-xl mb-1">({info.pronouns})</h4>
                        </div>

                        {/* introduction (elevator pitch) */}
                        {/* what I do */}
                        {/* what I work on */}
                        {/* currently interested in */}
                        {/* hobbies */}
                        
                    </div>
                </>
            }
        </div>
    )
}