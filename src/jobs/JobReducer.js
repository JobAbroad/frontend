const INITIAL_STATE = { jobList: [] }

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    console.log(JSON.stringify(action.payload))
    switch (action.type) {
        case 'JOB_FETCHED':
            return { ...state, jobList: action.payload }
        default:
            return state
    }
}