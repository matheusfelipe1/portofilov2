import { createSlice } from '@reduxjs/toolkit'

let fullText: string = "Software Developer"
let fullText2: string = "Matheus Santos"
export const introSlice = createSlice({
    name: 'intro',
    initialState: {
        index: 0,
        text: '',
        animations: [true, false, false]
    },
    reducers: {
        reset: (value) => {
            value.index = 0;
            value.text = '';
            value.animations = [true, false, false]
        },
        stop: (state) => {state.animations = [false, false, false]},
        start: (state) => {
            if (state.animations[0] === true) {
                state.text = state.text + fullText[state.index]
                state.index = state.index + 1;
                if (state.index === fullText.length) {
                    state.animations = [false, true, false]
                }
            } else if (state.animations[1]) {
                if (state.index <= 1) {
                    state.animations = [false, false, true]
                }
                const newText = state.text.split('');
                newText.reverse().shift()
                state.index = state.index - 1;
                state.text = newText.reverse().join('')
            } else if (state.animations[2]) {
                if (state.index < fullText2.length) {
                    state.text = state.text + fullText2[state.index]
                    state.index = state.index + 1;
                }
                if (state.index === fullText2.length) {
                    state.animations = [false, false, false]
                }
            }
        }
    }
})

export const { start, reset, stop } = introSlice.actions
export default introSlice.reducer

