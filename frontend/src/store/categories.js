import  configData from "../config/configData.json" 
import http from "../services/http"

// constants 
const CATEGORIES_REQUEST = "CATEGORIES_REQUEST"
const CATEGORIES_REQUEST_SUCCESS = "CATEGORIES_REQUEST_SUCCESS"
const CATEGORIES_REQUEST_FAIL = "CATEGORIES_REQUEST_FAIL"

// actions creators

export const getCategories = (name) =>  (dispatch) => {

    dispatch({type : CATEGORIES_REQUEST})

    http.get(configData.endpoint + "categories/" + name)
    .then(response => {
        console.log(response.data)
        dispatch({
            type : CATEGORIES_REQUEST_SUCCESS , 
            payload : {
                products : response.data
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

const reducer = (state = {products : [] ,  loading : false } , action) => {
    switch(action.type){
        case CATEGORIES_REQUEST : 
            return {products : [] , loading : true}
        case CATEGORIES_REQUEST_SUCCESS : 
            return { 
                products : action.payload.products , 
                loading : false 
            }
        case CATEGORIES_REQUEST_FAIL : 
            return {
                errors : action.payload.errors , 
                loading : false ,
            }
        default :
            return state
    }
}

export default reducer

