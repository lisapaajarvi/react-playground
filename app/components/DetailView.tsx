import React, { CSSProperties } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    id: string
}

export default function DetailView(props: Props) {
    const image = props.match.url.substr(1);
    const imageSrc = `../assets/${image}.jpg`;

    return (
        <div style={imageContainer}>
             <img src={imageSrc} />
        </div>
    );
}

    
const imageContainer: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}