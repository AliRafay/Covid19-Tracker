import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabs: {
    backgroundColor:"#00b9b9",
  },
});

export default function NavTabs({screenConfig}) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    screenConfig[1](newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={screenConfig[0]}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Global" />
        <Tab label="Country" />
        {/* <Tab label="All Countires" /> */}
      </Tabs>
    </Paper>
  );
}
