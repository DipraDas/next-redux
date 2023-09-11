import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    adult: 1
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {

    },
    extraReducers: builder => {

    }
})

export default homeSlice.reducer;