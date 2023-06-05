import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
  { id: 1, message: 'Hi,How are you?', likeCount: 45 },
  { id: 2, message: "It's my first post", likeCount: 12 }
];
let dialogsData = [
  {id : 1, name: 'Erentsen'},
  {id : 2, name: 'Saglara'},
  {id : 3, name: 'Chingis'},
  {id : 4, name: 'Mama'},
  {id : 5, name: 'Papa'}
];
 let messegeData = [
  {id:1, messege : 'Hello'},
  {id:2, messege : 'What`s up??'},
  {id:3, messege : 'Caramba!!!'},
  {id:4, messege : 'YO!'}
];
root.render(
  <React.StrictMode>
    <App data= {dialogsData} chats= {messegeData} posts= {posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
