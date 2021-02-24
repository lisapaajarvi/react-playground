import React, { Fragment } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import { Route } from 'react-router-dom';

export default function ViewContainer() {
    const sectionIds = ['forest', 'sky', 'desert'];
    
    return(
        <Fragment>
            <Route exact path="/" render={() => 
                <MasterView sectionIds={sectionIds}/>
            }/>
            <Route path="/forest" component={DetailView}/>
            <Route path="/sky" component={DetailView}/>
            <Route path="/desert" component={DetailView}/>
        </Fragment>
    );
}
