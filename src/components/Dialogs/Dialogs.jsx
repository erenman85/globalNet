import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let addMessage = () => {
    props.addMessage();
};
  let onMessageChange = (e) => {
     let text = e.target.value;
     props.onMessageChange(text);
 }

  let dilogsElement = props.state.dialogs
     .map(dialog => <DialogItem name= {dialog.name} id= {dialog.id} avatar= {dialog.avatar} />);
  let messagesElements = props.state.messages
      .map(p => <Message message = {p.message}/> )
    return (
      <div className={classes.dialogs}>
        <div className={classes.dailogs_items}>
          {dilogsElement}
        
       </div>
       <div className={classes.messages}>
           {messagesElements}
          </div>
           <div className= {classes.textarea}>
            <textarea onChange={onMessageChange} placeholder='Enter your message' value={props.state.newMessageText} />
            </div>
        <div>
          <button onClick={addMessage} >add message</button>
        </div>
      </div>
  )
}


export default Dialogs;