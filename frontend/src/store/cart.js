import http from "../services/http"
import configData from "../config/configData.json"

// constants
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const CHANGE_QUANTITY = "CHANGE_QUANTITY"

const ADDTOCART_REQUEST_SUCCESS =  "ADDTOCART_REQUEST_SUCCESS"
const ADDTOCART_REQUEST_FAIL =  "ADDTOCART_REQUEST_FAIL"

const ADD_LS_TO_STORE = "ADD_LS_TO_STORE"

// action creators
export const addToCart = (id) => (dispatch, getState) => {

    http.get(configData.endpoint + "products/getProduct/" + id)
    .then( res => {
        dispatch({
            type : ADDTOCART_REQUEST_SUCCESS , 
            payload : {
                product : res.data
            }
        })
    }
    ).then(() => {
        localStorage.setItem("cart" , JSON.stringify(getState().cart))    
    })
    .catch(error => {
        dispatch({
            type : ADDTOCART_REQUEST_FAIL , 
            payload : {
                error : error.message
            }
        })
    })
}

export const addLsToCart = (lsData)  => ({
        type : ADD_LS_TO_STORE , 
        payload : {
            lsData 
        }
})

export const removeFromCart = (id) => (dispatch , getState) => {
    dispatch({ type : REMOVE_FROM_CART , 
               payload : {id}
            })
    localStorage.setItem("cart" , JSON.stringify(getState().cart))    


}

export const changeQuantity = (id, quantity) => (dispatch , getState) => {
    dispatch({
            type : CHANGE_QUANTITY , 
            payload : {
                id , 
                quantity
            }}
        )
    localStorage.setItem("cart" , JSON.stringify(getState().cart))    

}

// reducer

const reducer = (state = [] , action) => {

    switch(action.type) {

        case ADDTOCART_REQUEST_SUCCESS : 
            const  product  = {...action.payload.product  , quantity : 1  } 
            return [...state , product] 
        case ADDTOCART_REQUEST_FAIL : 
            return [...state , {error : action.payload.error}]
        case REMOVE_FROM_CART : 
            return state.filter(elm => elm._id != action.payload.id)

        case CHANGE_QUANTITY : 
            return state.map(
                elm => elm._id == action.payload.id ? {...elm, quantity : action.payload.quantity } : elm 
            )
        case ADD_LS_TO_STORE : 
            return [...action.payload.lsData]
            

        default :
            return state ;
    }
}

export default reducer

// prodmotions data 


const promotions = [
    {   id : "1" ,
        title : "Eau Sidi Ali metalic" , 
        details : "6 bottles of 1.5L" ,
        unitPrice  : 5 , 
        image : "water.jpg" ,
        quantity : "6*1.5L" , 
        price : 30
    } , 
    {   id : "2" ,
        title : "HP All In One Printer" , 
        details : "Smart Tank 515 Black" ,
        unitPrice  : 450 , 
        image : "promo4.jpg" ,
        quantity : "1" , 
        price : 450
    } , 
    {   id : "3" ,
        title : "Geepas 4-Slice" , 
        details : "Bread Toaster Gbt9895, Multi Color" ,
        unitPrice  : 220 , 
        image : "promo2.jpg" ,
        quantity : "1" , 
        price : 220
    } ,
    {   id : "4" ,
        title : "Aruba Chocolate" , 
        details : "Aruba Chocolate Whipping Cream 80g" ,
        unitPrice  : 32 , 
        image : "promo3.jpg" ,
        quantity : "120g" , 
        price : 32
    },
    {   id : "5" ,
        title : "Pringles Ketchup" , 
        details : "Pringles Ketchup Chips 70g" ,
        unitPrice  : 20 , 
        image : "promo5.jpg" ,
        quantity : "70g" , 
        price : 20
    },

]