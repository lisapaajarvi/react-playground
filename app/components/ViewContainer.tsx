import React, { CSSProperties } from 'react';
import MasterView from './MasterView'

export default function Navbar() {
    return(
        <div style={viewContainerStyle}>
            <MasterView/>
        </div>
    );
}

const viewContainerStyle: CSSProperties = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    width: '100%',
    height: '100%',
    background: 'purple'
};