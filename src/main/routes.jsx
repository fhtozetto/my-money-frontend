import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCyle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCyle} />
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)