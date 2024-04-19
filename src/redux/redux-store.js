
import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer';


let reducers = combineReducers({
  profilePages: profileReducer,
  dialogsPages: dialogsReducer,
  sidebarPages: sidebarReducer,
  friendsPages: friendsReducer,
  auth: authReducer
});
let store = createStore(reducers);
window.store = store;


export default store;