import { createSlice } from '@reduxjs/toolkit'

let fullText: string = "<Sobre Mim/>"
export let fullText2: string = "<>Me considero um apaixonado por tecnologia, estou em constante evolução estudando e buscando aprender cada vez mais sobre. Atualmente estou cursando Ciência da Computação na faculdade Dom Helder Câmara, estou no 8º período e trabalhando como desenvolvedor, estou no ramo do desenvolvimento desde 2019 e atualmente trabalho em uma fábrica de software, programando aplicativos e sistemas para os clientes da mesma e com isso adquirindo conhecimento cada vez mais. Possuo conhecimentos sólidos em desenvolvimento Front-end Web e Mobile, também tenho conhecimento em Back-end mas meu foco é Front-end.</>"

export const aboutMeSlice = createSlice({
    name: 'about-me',
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
        start: (state) => {
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

export const { start, reset} = aboutMeSlice.actions
export default aboutMeSlice.reducer

