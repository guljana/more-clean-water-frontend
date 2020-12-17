import { TextField } from '@material-ui/core';
import './AddUserDetails.css';
  

function AddUserDetails(props) {
  const addDetailsStyle = {
    height: '52px',
    width: '100%',
    margin: '20px 0',
    padding: '0px'
  };
  return (
    <div>
      { (props.userType === "name" || props.userType === "email") && <TextField autoComplete="on" style={addDetailsStyle} required id={props.userType} label={props.userType} /> }
      { (props.userType === "password" || props.userType === "confirm password") && <TextField type="password" autoComplete="current-password" style={addDetailsStyle} required id={props.userType} label={props.userType} />}
    </div>
  );
}

export default AddUserDetails;
