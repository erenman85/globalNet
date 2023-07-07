import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redax/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (_state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state= {_state} addPost= {store.addPost.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)} 
       updateNewMessageText = {store.updateNewMessageText.bind(store)}
       addMessage = {store.addMessage.bind(store)}
      />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
