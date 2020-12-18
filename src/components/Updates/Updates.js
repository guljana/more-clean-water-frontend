import { useState } from "react";
import UpdatesItem from './UpdatesItem/UpdatesItem';
import Grid from '@material-ui/core/Grid';
import './Updates.css';

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

  let updatesList = [];

  const unreadUpdates = updates.filter(update => !update.read);

  unreadUpdates.forEach((update) => {
    updatesList.push (
      <UpdatesItem 
        title={update.title}
        description={update.description} 
        read={update.read}
      />)
  });

  return (
    <Grid 
        container
        alignItems="top"
        justify="center"
        className="updates"
    >
      <Grid item xs={10} className="updates-list">
        {updatesList}
      </Grid>
    </Grid>
  )
}

export default Updates;