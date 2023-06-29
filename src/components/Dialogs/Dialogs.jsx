import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



let Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.addMessage();
};
let onMessageChange = () => {
  let text = newMessageElement.current.value;
  props.updateNewMessageText(text);
}

  let dilogsElement = props.dialogsPages.dialogs
     .map(dialog => <DialogItem name= {dialog.name} id= {dialog.id} avatar= {dialog.avatar} />);
  let messagesElements = props.dialogsPages.messages
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
            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPages.newMessageText} />
            </div>
        <div>
          <button onClick={addMessage} >add message</button>
        </div>
      </div>
      

  )
}






export default Dialogs;