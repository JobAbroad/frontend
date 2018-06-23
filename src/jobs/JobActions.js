const jobJSON = [{
    id: 1,
    description: 'Job 01',
    title: 'Senior React Developer',
    companyId: 1,
    status: 'APPLIED'
},{
    id: 2,
    description: 'Job 02',
    title: 'Senior Java Developer',
    companyId: 1,
    status: 'NOTAPPLIED'
},{
    id: 3,
    description: 'Job 03',
    title: 'DevOps',
    companyId: 2,
    status: 'APPLIED'
},]

export function getJobs() {
    console.log('getJobs')
    return dispatch => {
        /*axios.get(`${BASE_URL}/vendor`)
            .then(resp => dispatch({ type: 'VENDOR_FETCHED', payload: resp.data }))*/
        dispatch({ type: 'JOB_FETCHED', payload: jobJSON })
    }
}

export function applyToJob(job) {
    console.log('applyToJob')
    return dispatch => {
        /*axios.get(`${BASE_URL}/vendor`)
            .then(resp => dispatch({ type: 'VENDOR_FETCHED', payload: resp.data }))*/
        dispatch({ type: 'JOB_APPLIED', payload: jobJSON })
    }    
}

/*
export function updateVendor(values) {
    console.log('submit')
    return dispatch => {
        const id = values._id ? values._id : ''
        console.log(id)
        axios.put(`${BASE_URL}/vendor/${id}`, values)
            .then(resp => {
                console.log('sucesso!')
                dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "success", message: "Registro atualizado com sucesso." }] })
                dispatch(init())
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                if (e.response === undefined)
                    dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "danger", message: "Erro na requisição ao servidor." }] })
                else {
                    let errorArray = []
                    e.response.data.errors.forEach(error => errorArray.push({ type: "danger", message: error }))
                    dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: errorArray })
                }
            })
    }
}
*/