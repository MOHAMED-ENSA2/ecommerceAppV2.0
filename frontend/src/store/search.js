import  configData from "../config/configData.json" 
import http from "../services/http"

// constants 
const SEARCH_REQUEST = "SEARCH_REQUEST"
const SEARCH_REQUEST_SUCCESS = "SEARCH_REQUEST_SUCCESS"
const SEARCH_REQUEST_FAIL = "SEARCH_REQUEST_FAIL"

// actions creators
export const search = (searchValue) =>  (dispatch) => {

    dispatch({type : SEARCH_REQUEST})

    http.get(configData.endpoint + "products/search?value=" + searchValue)
    .then(response => {
        dispatch({
            type : SEARCH_REQUEST_SUCCESS , 
            payload : {
                products : response.data
            }
        })
    })
    .catch(error => {
        dispatch({
            type : SEARCH_REQUEST_FAIL , 
            payload : {
                errors : error.message
            }
        })

    })

}

// reducer  

const reducer = (state = {products : [] ,  loading : false } , action) => {
    switch(action.type){
        case SEARCH_REQUEST : 
            return {...state , loading : true}
        case SEARCH_REQUEST_SUCCESS : 
            return { ...state , 
                products : action.payload.products , 
                loading : false 
            }
        case SEARCH_REQUEST_FAIL : 
            return { ...state , 
                errors : action.payload.errors , 
                loading : false ,
            }
        default :
            return state
    }
}

export default reducer

