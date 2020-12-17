import React from 'react';
import './AddUser.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddUserDetails from './AddUserDetails/AddUserDetails';

function AddUser() {
  const saveButtonStyle = {
        background: 'green',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '30px',
        marginLeft: '20%'
  };

  return (
    <Container fixed>
        <form style={{align:'center'}} action="">
          <ul className="add-user">
            <li><AddUserDetails userType="name"/></li>
            <li><AddUserDetails userType="email"/></li>
            <li><AddUserDetails userType="password"/></li>
            <li><AddUserDetails userType="confirm password"/></li>
            <li><Button style={saveButtonStyle} variant="outlined">
                  SAVE
              </Button>
            </li>
          </ul>
        </form>
    </Container>   
  );
}

export default AddUser;
   