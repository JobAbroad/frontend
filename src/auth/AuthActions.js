//import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

const loginJSON = {
    "name": "William Pavei Antero",
    "email": "williamantero@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWIyZDQyMjA5OTZlYzM1MWRjYmMwYWVlIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwibmFtZSI6ImluaXQiLCJfX3YiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiZW1haWwiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH0sIiRvcHRpb25zIjp0cnVlfSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkNlN3ci9melNGNUgybEtObnNPc1hrZUREcW85aWZBUXV1eUNyRjQuREI2dFZWQ2RXc05tVksiLCJlbWFpbCI6IndhbnRlcm9AZGxjdGVjLmNvbS5iciIsIm5hbWUiOiJXaWxsaWFtIFBhdmVpIEFudGVybyIsIl9pZCI6IjViMmQ0MjIwOTk2ZWMzNTFkY2JjMGFlZSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTI5Nzc1MDg4LCJleHAiOjE1Mjk4NjE0ODh9.yO0itdbjHvUCMb5XmzY_08vl2QKNEiefAetyghtTB-I"
}

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`)
}

export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`)
}

function submit(values, url) {
    //Mock
    return dispatch => {
        dispatch([
            { type: 'USER_FETCHED', payload: loginJSON }
        ])
    }
    
    //Post to Login Backend to receive JWT Token
    /*
    return dispatch => {
        axios.post(url, values)
        .then(resp => {
            dispatch([
                { type: 'USER_FETCHED', payload: resp.data }
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(
                error => toastr.error('Erro', error)
            )
        })
    }
    */
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}