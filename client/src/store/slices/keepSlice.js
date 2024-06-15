import { createSlice } from '@reduxjs/toolkit'
export const keepSlice = createSlice({
    name: 'keep',
    initialState: {
        categories: []
    },
    reducers: {
        setCategories: (state, action)=>{
            state.categories = action.payload
        }
    }
})

export const {setCategories} = keepSlice.actions
export default keepSlice.reducer