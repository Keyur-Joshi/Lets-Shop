import axios from 'axios';

import { 
    ALL_PRODCUTS_REQUEST, 
    ALL_PRODCUTS_SUCCESS, 
    ALL_PRODCUTS_FAIL, 
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
    try{
        dispatch({type: ALL_PRODCUTS_REQUEST})

        const { data } = await axios.get('/api/v1/products')
        console.log(data);
        dispatch({
            type: ALL_PRODCUTS_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: ALL_PRODCUTS_FAIL,
            payload: error.response.data.message
        })

    }
}

//Clear Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

