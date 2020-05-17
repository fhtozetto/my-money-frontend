import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabRecuder'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycles: BillingCycleReducer,
    form: formReducer
})

export default rootReducer
