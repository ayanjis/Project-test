import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    addedItems:{}
}

const slice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
      handleAddItems(state,action){
        const {productId,type} = action.payload
        if (type ==="add"){
            state.addedItems[productId] = 1 
        }
        else if (type ==="remove"){
          delete state.addedItems[productId]
        }
        console.log("Received from store",action.payload)
      }
    }
})

export const {handleAddItems} = slice.actions
export const reducer = slice.reducer
export default slice
