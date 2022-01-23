import http from "../services/http";
import configData from '../config/configData.json'

// consts
const GET_USERS  = "GET_USERS" ; 
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS" ;
const GET_USERS_FAIL = "GET_USERS_FAIL" ;


// action creators 

export const getUsers = () => (dispatch) => {
    dispatch({ type : GET_USERS}) 
    http.get(configData.endpoint + "users/getUsers")
        .then( res => {
            dispatch({
                type : GET_USERS_SUCCESS , 
                payload : {
                    users : res.data 
                }
            })
        })
        .catch(err => {
            dispatch({
                type : GET_USERS_FAIL ,
                payload : {
                    error : err.message
                }
            })
        })

}

// reducer 

const reducer = (state = {loading : false , users : [] } , action) => {
    switch(action.type){
        case GET_USERS : 
            return { loading : true }
        case GET_USERS_SUCCESS : 
            return {loading : false , users : action.payload.users}
        case GET_USERS_FAIL : 
            return {loading  : false , error : action.payload.error}
        default :
            return state
        }
}

export default reducer