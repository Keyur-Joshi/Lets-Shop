import { 
    ALL_PRODCUTS_REQUEST, 
    ALL_PRODCUTS_SUCCESS, 
    ALL_PRODCUTS_FAIL, 
    CLEAR_ERRORS} 
    from '../constants/productConstants'


export const productsReducer = (state = { products: []}, action) => {
    switch(action.type){
        
        case ALL_PRODCUTS_REQUEST:
            return{
                loading: true,
                products: []
            }
        
        case ALL_PRODCUTS_SUCCESS:
            return{
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case ALL_PRODCUTS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }




        
        default: 
            return state;

    }
}