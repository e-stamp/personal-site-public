import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currLocation = location.pathname;

    const getNavButtonClass = (path) => {
        const isActive = currLocation === path;

        return `flex items-center gap-2 p-2 font-medium
                rounded-lg transition-all duration-200 ease-in-out
                active:transform active:scale-95 hover:!border-transparent
                relative after:absolute after:bottom-0 after:left-0 after:w-full 
                after:transition-transform after:duration-200
                ${isActive ? 
                    'after:h-[2px] after:bg-fern after:transform-none' : 
                    'after:h-[2px] after:bg-fern after:scale-x-0 hover:after:scale-x-100'
                }`;
    };

    return (
        <nav
            className="group flex items-center"
            role="navigation"
            aria-label="Main navigation"
        >
            <div
                className="flex flex-row items-center gap-6 rounded-lg z-50"
                role="menu"
            >

                {/* Hub button */}
                <button
                    className={getNavButtonClass('/')}
                    style={{ background: 'transparent' }}
                    onClick={() => (navigate('/'))}
                    role="menuitem"
                >
                    Hub
                </button>

                {/* Resume button */}
                <button
                    className={getNavButtonClass('/resume')}
                    style={{ background: 'transparent' }}
                    onClick={() => (navigate('/resume'))}
                    role="menuitem"
                >
                    Resume
                </button>
            </div>
        </nav>
    )
}