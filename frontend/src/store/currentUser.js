import  configData from "../config/configData.json" 
import http from "../services/http"

// constants 
const CURRENT_USER_REQUEST = "CURRENT_USER_REQUEST"
export const CURRENT_USER_REQUEST_SUCCESS = "CURRENT_USER_REQUEST_SUCCESS"
const CURRENT_USER_REQUEST_FAIL = "CURRENT_USER_REQUEST_FAIL"
export const CURRENT_USER_REMOVE = "CURRENT_USER_REMOVE"
// actions creators

export const getCurrentUser = (token) =>  (dispatch) => {

    dispatch({type : CURRENT_USER_REQUEST})

    http.http({
        method : "get" , 
        url : configData.endpoint + "users/me" ,
        headers : {
            "x-auth-token" : token
        }
    })
    .then(response => {
        dispatch({
            type : CURRENT_USER_REQUEST_SUCCESS , 
            payload : {
                user : response.data
            }
        })
    })
    .catch(error => {
        dispatch({
            type : CURRENT_USER_REQUEST_FAIL , 
            payload : {
                errors : error.message
            }
        })

    })

}

// reducer  

const reducer = (state = {user : {} ,  loading : false } , action) => {
    switch(action.type){
        case CURRENT_USER_REMOVE : 
            return { 
                user : null , 
            }
        case CURRENT_USER_REQUEST : 
            return { loading : true}
        case CURRENT_USER_REQUEST_SUCCESS : 
            return { 
                user : action.payload.user , 
                loading : false 
            }
        case CURRENT_USER_REQUEST_FAIL : 
            return { 
                errors : action.payload.errors , 
                loading : false ,
            }
        default :
            return state
    }
}

export default reducer

