import { createSlice } from '@reduxjs/toolkit'

let fullText: string = "<Habilidades/>"

export const SkillsSlice = createSlice({
    name: 'skills',
    initialState: {
        index: 0,
        // index2: 0,
        text: '',
        // text2: '',
        finished: false
    },
    reducers: {
        reset: (value) => {
            value.index = 0;
            // value.index2 = 0;
            value.text = '';
            // value.text2 = '';
        },
        startSkill: (state) => {
            if (state.index < fullText.length) {
                state.text = state.text + fullText[state.index]
                state.index = state.index + 1;
            } else {
                state.finished = true
            }

        },
        // start2: (state) => {
        //     if (state.index2 < fullText2.length) {
        //         state.text2 = state.text2 + fullText2[state.index2]
        //         state.index2 = state.index2 + 1;
        //     }
        // }
    }
})

export const { startSkill, reset} = SkillsSlice.actions
export default SkillsSlice.reducer

