import http from "../services/http"
import configData from "../config/configData.json"

// constants
const ORDRE_REQUEST =  "ORDRE_REQUEST"
const ORDRE_REQUEST_SUCCESS =  "ORDRE_REQUEST_SUCCESS"
const ORDRE_REQUEST_FAIL =  "ORDRE_REQUEST_FAIL"

// action creators
export const getOrdres = () => (dispatch) => {
    dispatch({ type : ORDRE_REQUEST })
    http.http({
        method : "get" , 
        url : configData.endpoint + "ordre/getOrdres" , 
        headers : {
            "x-auth-token" : JSON.parse(localStorage.getItem("token"))
        }
    })
    .then( res => {     
        dispatch({  type : ORDRE_REQUEST_SUCCESS ,  payload : { ordres : res.data } })  
    })
    .catch(error => {
        dispatch({ type : ORDRE_REQUEST_FAIL , payload : { error : error.message } })
    })
}

// reducer
const reducer = (state = {ordres : [] , loading : false}, action) => {
    switch(action.type) {
        case ORDRE_REQUEST : 
            return {loading : true} 
        case ORDRE_REQUEST_SUCCESS : 
            return {
                ordres : action.payload.ordres , 
                loading : false 
             }
        case ORDRE_REQUEST_FAIL : 
            return { error : action.payload.error , loading : false }       
        default :
            return state ;
    }
}

export default reducer