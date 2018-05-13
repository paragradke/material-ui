import React, {Fragment} from 'react'
import { Grid, Paper, List } from 'material-ui-next'
import Typography from 'material-ui-next/Typography'
import RightPane from './RightPane'
import {ListItem, ListItemText} from 'material-ui-next/List'

const styles = {
  paper: { 
    padding: 20,
    marginTop: 10, 
    marginBottom: 10, 
    height:500, 
    overflowY:'auto' 
  }
}

export default ({ exercieses }) => 
 <Grid container> 
  <Grid item sm>
      <Paper style={styles.paper}>
        {exercieses.map(([group, exercieses]) => 
          <Fragment>
            <Typography 
            variant="headline" 
            style={{textTransform: 'capitalize'}}
            gutterBottom>
              {group}
            </Typography>
            <List component="ul">
              {exercieses.map(({title}) =>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
              )}
            </List>
          </Fragment>
        )}
      </Paper>
  </Grid>
  <Grid item sm>
      <Paper style={styles.paper}>
        <Typography
          variant="display1">
          Welcome!
          </Typography>
        <Typography 
          variant="subheading">
          Please select the exerciese from the left!
        </Typography>
    </Paper>
  </Grid>
 </Grid>