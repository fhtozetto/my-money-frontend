import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCyle from '../billingCycle/billingCycle'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCyle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)