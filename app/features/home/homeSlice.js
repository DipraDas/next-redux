import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    passenger: {
        adult: 1,
        child: 0,
        infant: 0
    }
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        increaseAdult: (state) => {
            state.passenger.adult += 1;
        },
        decreaseAdult: (state) => {
            if (state.passenger.adult > 1) {
                state.passenger.adult -= 1;
            }
        },
        increaseChild: (state) => {
            state.passenger.child += 1;
        },
        decreaseChild: (state) => {
            if (state.passenger.child > 0) {
                state.passenger.child -= 1;
            }
        },
        increaseInfant: (state) => {
            state.passenger.infant += 1;
        },
        decreaseInfant: (state) => {
            if (state.passenger.infant > 0) {
                state.passenger.infant -= 1;
            }
        }
    },
    extraReducers: (builder) => { }
});



export const { increaseAdult, decreaseAdult, increaseChild,decreaseChild, increaseInfant,decreaseInfant} = homeSlice.actions;
export default homeSlice.reducer;