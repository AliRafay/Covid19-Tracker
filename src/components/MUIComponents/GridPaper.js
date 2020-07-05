import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import { covidContext } from '../../context/globalState';
import './GridPaper.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1100,
    margin: '0 auto',
    marginTop: '60px',
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    borderRadius:'15px',
  },
  totalCases: {
    borderBottom:'solid 14px #008080',
    boxShadow:'0 0 20px #008080',
  },
  totalDeaths:{
    borderBottom:'solid 14px #d50000',
    boxShadow:'0 0 20px #d50000',
  },
  totalRecovered: {
    borderBottom:'solid 14px green',
    boxShadow:'0 0 20px green',
  },
  casesToday:{
    borderBottom:'solid 14px #6c6cb7',
    boxShadow:'0 0 20px #6c6cb7',
  },
  deathsToday: {
    borderBottom:'solid 14px #e1e100',
    boxShadow:'0 0 20px #e1e100',
  },
  affectedCountries:{
    borderBottom:'solid 14px #e87400',
    boxShadow:'0 0 20px #e87400',
  },

}));

export default function GridPaper() {
  const classes = useStyles();

  const {globalData}=useContext(covidContext);

  const CounterTag=({index})=>{
    return (
    <CountUp end={Object.values(globalData)[index]} duration={2} separator=',' />
    )};

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4} >
          <Paper elevation={8} className={`${classes.paper} ${classes.totalCases}`}>
            <h2>Total Cases</h2>
            <h6> &nbsp; <CounterTag index={0}/> </h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Paper elevation={8} className={`${classes.paper} ${classes.totalDeaths}`}>
            <h2>Total Deaths</h2>
            <h6> &nbsp; <CounterTag index={1}/> </h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Paper elevation={8} className={`${classes.paper} ${classes.totalRecovered}`}>
            <h2>Total Recovered</h2>
            <h6>&nbsp;<CounterTag index={2}/></h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Paper elevation={8} className={`${classes.paper} ${classes.casesToday}`}>
            <h2>Cases Today</h2>
            <h6>&nbsp;<CounterTag index={3}/></h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Paper elevation={8} className={`${classes.paper} ${classes.deathsToday}`}>
            <h2>Deaths Today</h2>
            <h6>&nbsp;<CounterTag index={4}/></h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Paper elevation={8} className={`${classes.paper} ${classes.affectedCountries}`}>
            <h2>Affected Countries</h2>
            <h6>&nbsp;<CounterTag index={5} /></h6>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
