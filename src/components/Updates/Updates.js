import { useState } from "react";
import Grid from '@material-ui/core/Grid';
import './Updates.css';
import UpdatesList from "./UpdatesList/UpdatesList";

function Updates({children}) {
  const [updates, setUpdates] = useState([
    {
    title: "Water shortage updates",
    description: "Description detailing water shortage", 
    read: false
    },
    {
      title: "Unsafe Area update",
      description: "Description detailing unsafe area", 
      read: true
    },
    {
      title: "New content update",
      description: "Description detailing the update", 
      read: false
    }
  ]);

  const unreadUpdates = updates.filter(update => !update.read);

  return (
    <Grid 
        container
        alignItems="top"
        justify="center"
        className="updates"
    >
      <Grid item xs={10}>
        <UpdatesList updates={unreadUpdates} />
      </Grid>
    </Grid>
  )
}

export default Updates;