import React, { CSSProperties } from 'react';

export default function Navbar() {
    return(
        <div style={navbar}>
            <h1 style={title}>Navbar</h1>
        </div>
    );
}

const navbar: CSSProperties = {
    height: '20%',
    background: 'purple',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
};

const title: CSSProperties = {
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: 0,
    padding: 0
};