import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import FriendsContainer from './components/Friends/UsersC';
import ProfileNewContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {
  return (
    
    <div className='app-wraper'>
      <div className='main-app'>
        <HeaderContainer />
        <NavbarContainer/>
        <div className='app-wraper-content'>
          <Routes>
            {/* <Route path='/profile/*' element = {<ProfileNewContainer />} /> */}
            <Route path='/profile/:userId?' element = {<ProfileNewContainer />} />
            <Route path='/dialogs/*' element = {<DialogsContainer />} />
            <Route path='/news/*' element = {<News />} />
            <Route path='/music/*' element = {<Music />} />
            <Route path='/settings/*' element = {<Settings />} />
            <Route path= '/friends/*' element = {<FriendsContainer />}/>
          </Routes> 
        </div>
      </div> 
    </div>
    
    );
}
export default App;
