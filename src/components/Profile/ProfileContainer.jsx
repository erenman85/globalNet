import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileNewContainer extends React.Component {
   componentDidMount() {
    //debugger;
     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`)
       .then(response =>{
         // this.props.toggleIsFetching(false);
          this.props.setUserProfile(response.data);
  });
   }
   render(){
    return (
      <Profile {...this.props} profile = {this.props.profile} />
    )
  } 
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePages.profile

  }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileNewContainer);