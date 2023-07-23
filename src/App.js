import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    
    <div className='app-wraper'>
      <div className='main-app'>
        <Header />
        <Navbar state= {props.state.sidebarPages} />
        <div className='app-wraper-content'>
          <Routes>
            <Route path='/profile' element = {<Profile 
                  store = {props.store} 
                  dispatch = {props.dispatch} />} />
            <Route path='/dialogs/*' element = {<DialogsContainer
                  store = {props.store} />} />
            <Route path='/news' element = {<News />} />
            <Route path='/music' element = {<Music />} />
            <Route path='/settings' element = {<Settings />} />
            <Route path= '/friends' element = {<Friends 
                   state= {props.state.sidebarPages} />}/>
          </Routes> 
        </div>
      </div> 
    </div>
    
    );
}
export default App;
