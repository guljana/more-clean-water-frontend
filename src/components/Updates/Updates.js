import UpdatesItem from './UpdatesItem/UpdatesItem';
import Grid from '@material-ui/core/Grid';
import './Updates.css';

function Updates({children}) {
  const updatesItems = [
    {
    title: "Water shortage updates",
    description: "Description detailing water shortage"
    },
    {
      title: "Unsafe Area update",
      description: "Description detailing unsafe area "
    },
    {
      title: "New content update",
      description: "Description detailing the update"
    }
  ]

  let updatesList = [];

  updatesItems.forEach((updateItem) => {
    updatesList.push (<UpdatesItem title={updateItem.title} description={updateItem.description} />)
  })

  return (
    <Grid 
        container
        alignItems="center"
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