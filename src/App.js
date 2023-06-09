import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    
    <div className='app-wraper'>
      <div className='main-app'>
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Routes>
            <Route path='/profile' element = {<Profile 
                  state= {props.state.profilePages} />} />
            <Route path='/dialogs/*' element = {<Dialogs 
                  state = {props.state.dialogsPages} />} />
            <Route path='/news' element = {<News />} />
            <Route path='/music' element = {<Music />} />
            <Route path='/settings' element = {<Settings />} />

          </Routes> 
        </div>
      </div> 
    </div>
    
    );
}
export default App;
