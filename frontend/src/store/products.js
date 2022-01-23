import  configData from "../config/configData.json" 
import http from "../services/http"

// constants 
const PRODUCTS_REQUEST = "PRODUCTS_REQUEST"
const PRODUCTS_REQUEST_SUCCESS = "PRODUCTS_REQUEST_SUCCESS"
const PRODUCTS_REQUEST_FAIL = "PRODUCTS_REQUEST_FAIL"

// actions creators
export const getProducts = () =>  (dispatch) => {

    dispatch({type : PRODUCTS_REQUEST})

    http.get(configData.endpoint + "products/getProducts")
    .then(response => {
        dispatch({
            type : PRODUCTS_REQUEST_SUCCESS , 
            payload : {
                products : response.data
            }
        })
    })
    .catch(error => {
        dispatch({
            type : PRODUCTS_REQUEST_FAIL , 
            payload : {
                errors : error.message
            }
        })

    })

}

// reducer  

const reducer = (state = {products : [] ,  loading : false } , action) => {
    switch(action.type){
        case PRODUCTS_REQUEST : 
            return {...state , loading : true}
        case PRODUCTS_REQUEST_SUCCESS : 
            return { ...state , 
                products : action.payload.products , 
                loading : false 
            }
        case PRODUCTS_REQUEST_FAIL : 
            return { ...state , 
                errors : action.payload.errors , 
                loading : false ,
            }
        default :
            return state
    }
}

export default reducer

