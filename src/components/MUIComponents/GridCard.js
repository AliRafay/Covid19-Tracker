import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import { covidContext } from '../../context/globalState';
import TextField from '@material-ui/core/TextField';
import './GridCard.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        margin: '0 auto',
        marginTop: '40px',
    },
    form:{
        width:"100%",
        textAlign:"center",
        marginBottom:"15px",
    },
    search:{
        width:'35%'
    }
    
});

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function GridCard() {
    const classes = useStyles();
    const { countryData } = useContext(covidContext);
    const [searchCountry,setSearchCountry]=useState('');
    const filterCountries =countryData.filter((item) => {
        return searchCountry !== ''
            ? item.country.toLowerCase().includes(searchCountry.toLowerCase())
            : item;
    });
    return (
        <div className={classes.root}>
        
              <form preventDefault className={classes.form} noValidate autoComplete="off">
                <TextField onChange={(e)=>{setSearchCountry(e.target.value)}} placeholder="Enter Country Name" className={classes.search} id="outlined-basic" label="Country Name" variant="outlined" />
            </form>

            <Grid container spacing={4}>
                {Object.keys(filterCountries).map((key, ind) => {
                    return (
                        <Grid key={ind} item xs={12} sm={6} md={4} >
                            <Card style={{ borderRadius: '20px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={filterCountries[key]['country']}
                                        height="200"
                                        image={filterCountries[key]["countryInfo"]["flag"]}
                                    />
                                    <CardContent>
                                        <center>
                                            <div>
                                                <h3 style={{ fontSize: '22px' }}>{filterCountries[key]['country'].toUpperCase()}</h3>

                                                <h4 style={{ color: '#0000ff' }} className='CountrySubHead'>Total Cases</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(filterCountries[key]["cases"])}</h5>

                                                <h4 style={{ color: '#d50000' }} className='CountrySubHead'>Total Deaths</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(filterCountries[key]["deaths"])}</h5>

                                                <h4 style={{ color: 'green' }} className='CountrySubHead'>Total Recovered</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(filterCountries[key]["recovered"])}</h5>

                                                <h4 style={{ color: '#6c6cb7' }} className='CountrySubHead'>Active Cases</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(filterCountries[key]["active"])}</h5>
                                            </div>
                                        </center>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>

            {/* <Grid container spacing={4}>
                {Object.keys(countryData).map((key, ind) => {
                    return (
                        <Grid key={ind} item xs={12} sm={6} md={4} >

                            <Card style={{ borderRadius: '20px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={countryData[key]['country']}
                                        height="200"
                                        image={countryData[key]["countryInfo"]["flag"]}
                                    />
                                    <CardContent>
                                        <center>
                                            <div>
                                                <h3 style={{ fontSize: '22px' }}>{countryData[key]['country'].toUpperCase()}</h3>

                                                <h4 style={{ color: '#0000ff' }} className='CountrySubHead'>Total Cases</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(countryData[key]["cases"])}</h5>

                                                <h4 style={{ color: '#d50000' }} className='CountrySubHead'>Total Deaths</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(countryData[key]["deaths"])}</h5>

                                                <h4 style={{ color: 'green' }} className='CountrySubHead'>Total Recovered</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(countryData[key]["recovered"])}</h5>

                                                <h4 style={{ color: '#6c6cb7' }} className='CountrySubHead'>Active Cases</h4>
                                                <h5 className='CountrySubData'>{numberWithCommas(countryData[key]["active"])}</h5>
                                            </div>
                                        </center>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid> */}
        </div>

    );
}

