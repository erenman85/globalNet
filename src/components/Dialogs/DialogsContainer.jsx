
import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPages

  }
};
const mapDispathToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      let action = updateNewMessageActionCreator(text);
       dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }

  }
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps) (Dialogs);



export default DialogsContainer;