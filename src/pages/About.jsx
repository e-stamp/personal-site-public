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
                    {/* About page */}
                    <div className="p-3 mb-6">
                        <h2 className="text-2xl font-bold mb-2">About</h2>

                        <div className="leaf p-3 mb-6 flex flex-col items-center justify-center">
                            <div className="profile mt-5 w-[600px] h-[600px]"></div>
                            <h3 className="text-2xl font-semibold mt-5">{info.first_name} {info.last_name}</h3>
                            <h4 className="text-xl ">({info.pronouns})</h4>
                            
                            {/* introduction (elevator pitch) */}
                            <div className="p-3 mb-3 text-lg">
                                <p>Hi, I'm Eva, a third year computer science student currently studying at Dalhousie University.
                                    I'm passionate about software development and have experience in full-stack development, cloud computing, and database management.
                                    I'm currently looking for a winter 2025/2026 co-op position to continue to gain more experience in the field.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}