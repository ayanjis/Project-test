/* eslint-disable array-callback-return */
import {createSlice} from '@reduxjs/toolkit';
import { shopCard } from "../../utils/constants";
import {toast} from 'react-toastify'
const initialState = {
    products : shopCard
}

const slice = createSlice({
    name:'shop',
    initialState:initialState,
    reducers:{
      handleAddRemoveItems(state,action){    
        const {productId,type,quantity} = action.payload
        console.log("productId",productId , "type", type , "quantity" , quantity)
                state.products?.map((el) => {
                if (el.id===productId){
                    if (type==="add"){
                        el.isAdd = true;
                        el.quantity = quantity;
                        toast.info('Element added to cart successfully',{position:"top-center"})
                        toast.info('Element added to cart successfully',{position:"bottom-left"})
                    }
                    else if (type==='remove'){ 
                        el.isAdd = false
                        el.quantity = 0
                    }
                }
            })
      }
    }
})


export const {handleAddRemoveItems} = slice.actions
export const reducer = slice.reducer
export default slice
