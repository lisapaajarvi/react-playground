import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom';

interface Props {
    id: string
}

export default function NavigationItem(props: Props) {
    const url = `${props.id}`;
    const imageSrc = `../assets/${props.id}.jpg`;

    return(
        <Link to={url} style={{ ...gridItem, ...centeredContent, ...itemStyle }}>
            <img src={imageSrc} style={{...fullscreen, ...itemStyle}} />
            <h2 style={{ ...centeredAbsolute, ...title}}>{props.id}</h2>
        </Link>
    )
}

const title: CSSProperties = {
    fontSize: '2rem',
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%'
}

const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const centeredContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
};

const itemStyle: CSSProperties = {
    borderRadius: '1rem',
}