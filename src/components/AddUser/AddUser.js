import './AddUser.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddUserDetails from './AddUserDetails/AddUserDetails';

function AddUser() {
  const saveButtonStyle = {
        background: 'green',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        marginTop: '20px',
        justifyContent: 'center',
        width: '150px'
  };

  return (
      <Grid 
        container
        alignItems="center"
        justify="center"
        className="add-user"
      >
        <Grid item xs={10} className="form">
          <form action="">
              <AddUserDetails userType="name"/>
              <AddUserDetails userType="email"/>
              <AddUserDetails userType="password"/>
              <AddUserDetails userType="confirm password"/>
              <Grid item xs={12} className="center">
                <Button style={saveButtonStyle} variant="outlined">
                  SAVE  
                </Button>
              </Grid>
          </form>
        </Grid>
      </Grid>
  )
}

export default AddUser;
   