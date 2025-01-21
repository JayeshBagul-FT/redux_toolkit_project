import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 2
}

const counterslice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (count > 0) {
                state.count -= 1
            }
        },
        reset: (state) => {
            state.count = 0
        }
    }
})


export const { increment, decrement, reset } = counterslice.actions
export default counterslice.reducer