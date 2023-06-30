import { configureStore } from '@reduxjs/toolkit'
import reducer from './counterSlice'
import introData from '../components/intro/viewModel/intro.viewModel'
import aboutMeData from '../components/aboutme/viewModel/about-me.viewModel'
import AppController from './App.controller'
import skillsController from '../components/skills/viewModel/skills.controller'

export default configureStore({
  reducer: {
    intro: introData,
    aboutMe: aboutMeData,
    app: AppController,
    skills: skillsController
  },
})