import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import Jobs from '../jobs/Job'
import Auth from '../auth/Auth'

const userIsAuthenticated = connectedRouterRedirect({
    // The url to redirect user to if they fail
    redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains user data
    authenticatedSelector: state => state.auth.validToken,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated'
})

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Auth} />
            <Route path='/jobs' component={userIsAuthenticated(Jobs)} />
        </Switch>
    </BrowserRouter>
)