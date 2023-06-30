import 'primeicons/primeicons.css';
import './App.css';
import { Home } from './components/home/view/home.view';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { NavBarView } from './components/navbar/view/navbar.view';
import { Intro } from './components/intro/view/intro.view';
import { Icon } from './components/icon/view/icon.view';
import { AboutMe } from './components/aboutme/view/about-me.view';
import { listening } from './App.controller'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { start } from './components/aboutme/viewModel/about-me.viewModel';

function App() {
  const dispatch = useDispatch()
  const about = useSelector((state: any) => state.app.about)

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
  }, [about])

  const listen = () => {
    window.addEventListener('scroll', () => {
      dispatch(listening())
    })
  }

  return (
    <div className="App">
      <NavBarView />
      <Intro class={'intro'} />
      <div id='aboutme'>
        <AboutMe canAnimate={about} />
      </div>
      <Icon icon={about ? 'pi pi-user' : 'pi pi-home'} />
      <div style={{ clear: 'both' }}></div>
    </div>
  );
}

export default App;
