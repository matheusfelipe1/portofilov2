import 'primeicons/primeicons.css';
import './App.css';
import { Home } from '../components/home/view/home.view';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { NavBarView } from '../components/navbar/view/navbar.view';
import { Intro } from '../components/intro/view/intro.view';
import { Icon } from '../components/icon/view/icon.view';
import { AboutMe } from '../components/aboutme/view/about-me.view';
import { listening } from './App.controller'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { start } from '../components/aboutme/viewModel/about-me.viewModel';
import { Skills } from '../components/skills/view/skills.view';
import { startSkill } from '../components/skills/viewModel/skills.controller'

function App() {
  const dispatch = useDispatch()
  const about = useSelector((state: any) => state.app.about)
  const skills = useSelector((state: any) => state.app.skills)

  useEffect(() => {
    listen()
  }, [])

  useEffect(() => {
    if (about) {
      dispatch(start())
      document.getElementById('aboutAnimate1')?.classList.add('initializing')
      document.getElementById('aboutAnimate3')?.classList.add('initializing2')
      document.getElementById('aboutAnimate2')?.classList.add('initializing2')
    }
    if (skills) {
      dispatch(startSkill())

      document.getElementById('aboutAnimate4')?.classList.add('initializing')
      document.getElementById('aboutAnimate6')?.classList.add('initializing2')
      document.getElementById('aboutAnimate5')?.classList.add('initializing2')

    }
  }, [about, skills])

  const listen = () => {
    window.addEventListener('scroll', (e) => {
      dispatch(listening())
    })
  }

  return (
    <div className="App">
      <NavBarView />
      <Intro class={'intro'} />
      <div id='aboutme'>
        <div>
          <AboutMe canAnimate={about} />
        </div>
      </div>
      <div id="skills" >
        <Skills canAnimate={skills} />
      </div>
      <Icon icon={about ? 'pi pi-user' : 'pi pi-home'} />
      <div style={{ clear: 'both' }}></div>
    </div>
  );
}

export default App;
