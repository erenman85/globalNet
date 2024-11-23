import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileNewContainer extends React.Component {
   componentDidMount() {
  debugger;
    let userId = this.props.router.params.userId;
    if (!userId){
      userId= 30200;
  }
     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
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
const mapStateToProps = (state) =>  {
  return {
    profile: state.profilePages.profile

  }
}

const withRouter = WrappedComponent => props => {
  const params = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  // etc... other react-router-dom v6 hooks
  return (
      <WrappedComponent
          {...props}
          router={{ location, navigation, params }}     
          // etc...
      />
  );
};
let WithUrlDataContainerComponent = withRouter(ProfileNewContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);