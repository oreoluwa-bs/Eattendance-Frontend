import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashbaord = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => <div>Hi</div>} />
                {/* <Route exact path='/manage-courses' component={() => <div>Hi</div>} /> */}
            </Switch>
        </div>
    );
}

export default Dashbaord;