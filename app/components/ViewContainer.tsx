import React, { Suspense, CSSProperties } from 'react';
import { Route } from 'react-router-dom';
import MasterView from './MasterView';

//const MasterView = React.lazy (()=> import(/*webpackChunkName: "masterView" */ './MasterView'));
const DetailView = React.lazy (()=> import(/* webpackChunkName: "detailView" */ './DetailView'));


export default function ViewContainer() {
    const sectionIds = ['forest', 'sky', 'desert'];
    
    return(
        <div style={viewContainerStyle} >           
            <Route exact path="/" render={() => 
                <MasterView sectionIds={sectionIds}/>
            }/>
            <Suspense fallback={<div>Loading</div>}>
                <Route path="/forest" component={DetailView}/>
                <Route path="/sky" component={DetailView}/>
                <Route path="/desert" component={DetailView}/>
            </Suspense>
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
