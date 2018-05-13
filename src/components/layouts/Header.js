import React from 'react';
import { AppBar, Toolbar, Typography} from 'material-ui-next';


export default props =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color='inherit' gutterBottom>
        Excericise Database
      </Typography>
    </Toolbar>
  </AppBar>