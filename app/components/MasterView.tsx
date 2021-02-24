import React, { CSSProperties } from 'react';
import SectionItem from './SectionItem';

export default function MasterView() {
    return(
        <div style={contentBox}>
            <SectionItem />
            <SectionItem />
            <SectionItem />
        </div>
    )
};

const contentBox: CSSProperties = {
    background: 'purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80%',
    alignItems: 'center'
}