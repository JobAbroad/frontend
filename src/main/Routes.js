import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Jobs from '../jobs/Job'
import Auth from '../auth/Auth'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/jobs'  component={Jobs} />
            <Route path='/login' component={Auth} />
        </Switch>
    </BrowserRouter>
)