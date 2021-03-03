import React, { CSSProperties } from 'react';
import { PropagateLoader } from 'react-spinners';

export default function() {
    return(
        <div style={spinnerStyle}>
            <PropagateLoader/>
        </div>
    )
}

const spinnerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    width: '100%',
    height: '100%',
}