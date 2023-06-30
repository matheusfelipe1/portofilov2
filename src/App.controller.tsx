import { createSlice } from '@reduxjs/toolkit'

const AppSlice = createSlice({
    initialState: {
        about: false
    },
    name: 'app',
    reducers: {
        listening: (state) => {
            var about = document.getElementById('aboutme')?.offsetTop
            if ( document.documentElement.clientHeight >= about!) {
                state.about = true;
            }
        }
    }
})

export const { listening } = AppSlice.actions;

export default AppSlice.reducer