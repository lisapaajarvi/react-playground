import React, {CSSProperties} from 'react';

export default function SectionItem() {
    return(
        <div>
            <div style={title}>item title</div>
            <div style={imageDiv}></div>
        </div>
    )
}

const title: CSSProperties = {
    fontSize: '2rem'
}

const imageDiv: CSSProperties = {
    height: '3rem',
    width: '3rem',
    background: 'red'
}