import React, { CSSProperties } from 'react';
import NavigationItem from './NavigationItem';

interface Props {
    sectionIds: string[]
}
export default function MasterView(props: Props) {

    return(
        <div style={contentBox}>
            {props.sectionIds.map((value) => 
            <NavigationItem id={value} />)}
        </div>
    )
};

const contentBox: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5rem',
    justifyItems: 'stretch',
    alignItems: 'stretch',
}
