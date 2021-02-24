import React, { Fragment, CSSProperties } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import { Route } from 'react-router-dom';

export default function ViewContainer() {
    const sectionIds = ['forest', 'sky', 'desert'];
    
    return(
        <div style={viewContainerStyle} >
            <Route exact path="/" render={() => 
                <MasterView sectionIds={sectionIds}/>
            }/>
            <Route path="/forest" component={DetailView}/>
            <Route path="/sky" component={DetailView}/>
            <Route path="/desert" component={DetailView}/>
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
