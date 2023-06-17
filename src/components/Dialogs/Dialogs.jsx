import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



let Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
  alert(text);
};

  let dilogsElement = props.state.dialogs
     .map(dialog => <DialogItem name= {dialog.name} id= {dialog.id} avatar= {dialog.avatar} />);
  let messagesElements = props.state.messeges
      .map(post => <Message message = {post.messege}/> )
    return (
      <div className={classes.dialogs}>
        <div className={classes.dailogs_items}>
          {dilogsElement}
        
       </div>
       <div className={classes.messages}>
           {messagesElements}
           <div>
        <textarea ref={newMessageElement}></textarea>
        <div>
        <button onClick={addMessage}>add message</button>
      </div>
      </div>
       </div>
      </div>

  )
}






export default Dialogs;