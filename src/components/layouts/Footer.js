import React from 'react';
import { Tabs, Paper } from 'material-ui-next';
import { Tab } from 'material-ui-next/Tabs';

export default ({ muscles }) => 
  <Paper >
  <Tabs
    value={0}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
  <Tab label='All' />
  {muscles.map(muscle => 
    <Tab label={muscle} />
  )}
  </Tabs>
  </Paper>;