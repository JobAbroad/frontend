import { combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from '../auth/AuthReducer'
import JobReducer from '../jobs/JobReducer'


const rootReducer = combineReducers({
    auth: AuthReducer,
    job: JobReducer,
    toastr: toastrReducer
})

export default rootReducer