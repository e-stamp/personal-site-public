import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <h1>My Website</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; 2023 My Website</p>
            </footer>
        </div>
    );
}