import React, { CSSProperties } from 'react';
import SectionItem from './SectionItem';

export default function MasterView() {

    const sectionIds = ['forest', 'sky', 'desert'];

    return(
        <div style={contentBox}>
            {sectionIds.map((value) => <SectionItem id={value} />)}
        </div>
    )
};

const contentBox: CSSProperties = {
    background: 'purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    margin: '0.5rem',
    justifyItems: 'stretch',
    alignItems: 'stretch'
}
