import { createSlice } from '@reduxjs/toolkit'
import '@fortawesome/fontawesome-free/css/all.min.css';
const AppSlice = createSlice({
    initialState: {
        about: false,
        skills: false,
        indexs: [0, 0, 0, 0],
        icon: 'pi pi-home'
    },
    name: 'app',
    reducers: {
        listening: (state) => {
            const about = document.getElementById('aboutme')?.offsetTop
            const skills = document.getElementById('skills')?.offsetTop
            if ((about! - window.scrollY) <= 500) {
                state.about = true;
                state.indexs[1] = 1
            } else state.indexs[1] = 0
            if ((skills! - window.scrollY) <= 500) {
                state.skills = true;
                state.indexs[2] = 1
            } else state.indexs[2] = 0

            const length = state.indexs.filter(e => e === 1).length;
            switch (length) {
                case 0:
                    state.icon = 'pi pi-home'
                    break;
                case 1:
                    state.icon = 'pi pi-user'
                    break;
                case 2:
                    state.icon = 'fas fa-laptop-code'
                    break;
                default:
                    break;
            }
        }
    }
})

export const { listening } = AppSlice.actions;

export default AppSlice.reducer