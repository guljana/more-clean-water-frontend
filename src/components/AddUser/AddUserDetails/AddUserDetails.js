import React from 'react';
import { TextField } from '@material-ui/core';
import './AddUserDetails.css';
  

function AddUserDetails(props) {
  const addDetailsStyle = {
    height: '52px',
    width: '319px',
    margin: '20px',
    padding: '0px'
  };
  return (
    <div>
      { (props.userType === "name" || props.userType === "email") && <TextField style={addDetailsStyle} required id={props.userType} label={props.userType} /> }
      { (props.userType === "password" || props.userType === "confirm password") && <TextField type="password" style={addDetailsStyle} required id={props.userType} label={props.userType} />}
    </div>
  );
}

export default AddUserDetails;
