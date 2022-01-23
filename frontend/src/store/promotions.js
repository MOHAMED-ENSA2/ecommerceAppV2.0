import  configData from "../config/configData.json" 
import http from "../services/http"

// constants 
const PROMOTIONS_REQUEST = "PROMOTIONS_REQUEST"
const PROMOTIONS_REQUEST_SUCCESS = "PROMOTIONS_REQUEST_SUCCESS"
const PROMOTIONS_REQUEST_FAIL = "PROMOTIONS_REQUEST_FAIL"

// actions creators
export const getPromotions = () =>  (dispatch) => {
    
    dispatch({type : PROMOTIONS_REQUEST})

    http.get(configData.endpoint + "promotions/getPromotions")
    .then(response => {
        dispatch({
            type : PROMOTIONS_REQUEST_SUCCESS , 
            payload : {
                promotions : response.data
            }
        })
    })
    .catch(error => {
        dispatch({
            type : PROMOTIONS_REQUEST_FAIL , 
            payload : {
                errors : error.message
            }
        })

    })

}

// reducer  

const reducer = (state = {promotions : [] ,  loading : false } , action) => {
    switch(action.type){
        case PROMOTIONS_REQUEST : 
            return {...state , loading : true}
        case PROMOTIONS_REQUEST_SUCCESS : 
            return { ...state , 
                promotions : action.payload.promotions , 
                loading : false 
            }
        case PROMOTIONS_REQUEST_FAIL : 
            return { ...state , 
                errors : action.payload.errors , 
                loading : false ,
            }
        default :
            return state
    }
}

export default reducer

