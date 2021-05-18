import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PatientProfile from '../component/PatientProfile';
import LoginModal from './LoginModal';
import Login from '../component/Auth/Login';
import ModalComponent from './ModalComponent';
function Profiles(props) {
  const {loggedIn} = props;
  return loggedIn ? (
    <PatientProfile />
  ) : (
    <LoginModal crossIcon={false}>
      <Login />
    </LoginModal>
  );
}

function mapState(state) {
  const {userDetails} = state.userReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {};
export default connect(mapState, actionCreators)(Profiles);
