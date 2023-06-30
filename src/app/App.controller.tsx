import { createSlice } from '@reduxjs/toolkit'

const AppSlice = createSlice({
    initialState: {
        about: false,
        skills: false
    },
    name: 'app',
    reducers: {
        listening: (state) => {
            var about = document.getElementById('aboutme')?.offsetTop
            var skills = document.getElementById('skills')?.offsetTop
            if (window.scrollY >= about!) {
                state.about = true;
            }
            if (window.scrollY >= skills!) {
                state.skills = true;
            }
        }
    }
})

export const { listening } = AppSlice.actions;

export default AppSlice.reducer