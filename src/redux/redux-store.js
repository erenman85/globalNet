
import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import friendsReducer from './friendsReducer';


let reducers = combineReducers({
  profilePages: profileReducer,
  dialogsPages: dialogsReducer,
  sidebarPages: sidebarReducer,
  friendsPages: friendsReducer
});
let store = createStore(reducers);
window.store = store;


export default store;