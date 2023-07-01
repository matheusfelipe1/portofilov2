import { createSlice } from '@reduxjs/toolkit'
export const textIntro = '<>Aqui está uma breve apresentação das tecnologias que eu domino. Tenho experiência na metodologia ágil scrum e todos os serviços da engenharia de software que o Azure DevOps oferece.</>' 
let fullText: string = "<Habilidades/>"
const skillsList = [
    'Flutter'
    , 'ReactJS e React Native'
    , 'Angular'
    , 'Python'
    , 'NodeJS'
    , 'HTML '
    , 'CSS  '
    , 'VueJS'
    , 'MySQL'
    , 'Loja e serviços da App Store Connect'
    , 'Loja e serviços da Google Play Console'
    , 'Git  ']

export const SkillsSlice = createSlice({
    name: 'skills',
    initialState: {
        index: 0,
        index2: 0,
        text: '',
        text2: '',
        finished: false,
        canStart: false,
        stars: 0
    },
    reducers: {
        reset: (value) => {
            value.index = 0;
            value.index2 = 0;
            value.text = '';
            value.text2 = '';
        },
        startSkill: (state) => {
            if (state.index < fullText.length) {
                state.text = state.text + fullText[state.index]
                state.index = state.index + 1;
            } else {
                state.finished = true
            }

        },
        flutter: (state) => {
            if (state.index2 < skillsList[0].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[0][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        react: (state) => {
            if (state.index2 < skillsList[1].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[1][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        angular: (state) => {
            if (state.index2 < skillsList[2].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[2][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        py: (state) => {
            if (state.index2 < skillsList[3].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[3][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 4) {
                    state.stars++
                }
            }
        },
        node: (state) => {
            if (state.index2 < skillsList[4].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[4][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        html: (state) => {
            if (state.index2 < skillsList[5].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[5][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        css: (state) => {
            if (state.index2 < skillsList[6].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[6][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        vue: (state) => {
            if (state.index2 < skillsList[7].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[7][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 4) {
                    state.stars++
                }
            }
        },
        sql: (state) => {
            if (state.index2 < skillsList[8].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[8][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 3) {
                    state.stars++
                }
            }
        },
        apple: (state) => {
            if (state.index2 < skillsList[9].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[9][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        android: (state) => {
            if (state.index2 < skillsList[10].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[10][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        git: (state) => {
            if (state.index2 < skillsList[11].length && state.canStart) {
                state.canStart = true
                state.text2 = state.text2 + skillsList[11][state.index2]
                state.index2 = state.index2 + 1;
                if (state.stars < 5) {
                    state.stars++
                }
            }
        },
        resetAll: (state) => {
            state.canStart = false
            state.index2 = 0
            state.text2 = ''
            state.stars = 0;

        },
        startAnimate: (state) => {
            state.canStart = true
        }
    }
})

export const { startAnimate,resetAll, startSkill, reset, android, flutter, angular, apple, css, git, html, node, py, react, sql, vue } = SkillsSlice.actions
export default SkillsSlice.reducer

