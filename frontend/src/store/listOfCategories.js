import  configData from "../config/configData.json" 
import http from "../services/http"

// constants 
const CATEGORIES_REQUEST = "CATEGORIES_REQUEST"
const CATEGORIES_REQUEST_SUCCESS = "CATEGORIES_REQUEST_SUCCESS"
const CATEGORIES_REQUEST_FAIL = "CATEGORIES_REQUEST_FAIL"

// actions creators

export const getListOfCategories = () =>  (dispatch) => {

    dispatch({type : CATEGORIES_REQUEST})

    http.get(configData.endpoint + "categories/getCategories")
    .then(response => {
        dispatch({
            type : CATEGORIES_REQUEST_SUCCESS , 
            payload : {
                categories : response.data
            }
        })
    })
    .catch(error => {
        dispatch({
            type : CATEGORIES_REQUEST_FAIL , 
            payload : {
                errors : error.message
            }
        })

    })

}

// products by categories reducer  

const reducer = (state = {categories : [] ,  loading : false } , action) => {
    switch(action.type){
        case CATEGORIES_REQUEST : 
            return {...state , loading : true}
        case CATEGORIES_REQUEST_SUCCESS : 
            return { ...state , 
                categories : action.payload.categories , 
                loading : false 
            }
        case CATEGORIES_REQUEST_FAIL : 
            return { ...state , 
                errors : action.payload.errors , 
                loading : false ,
            }
        default :
            return state
    }
}

export default reducer

