import React from 'react';
import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState();
  let addMessage = () => {
      props.store.dispatch(addMessageActionCreator());
};
  let onMessageChange = (text) => {
     let action = updateNewMessageActionCreator(text);
     props.store.dispatch(action);
 }
    return (
    <Dialogs addMessage = {addMessage} onMessageChange = {onMessageChange}
      state = {state.dialogsPages} />
    )
}


export default DialogsContainer;