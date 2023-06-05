import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



let Dialogs = (props) => {

  let dilogsElement = props.dialogs
     .map(dialog => <DialogItem name= {dialog.name} id= {dialog.id} />);
  let messagesElements = props.messegeData
      .map(post => <Message message = {post.messege}/> )
    return (
      <div className={classes.dialogs}>
        <div className={classes.dailogs_items}>
          {dilogsElement}
        
       </div>
       <div className={classes.messages}>
           {messagesElements}
       </div>
      </div>

  )
}






export default Dialogs;