import React, { useState, useEffect } from 'react'

const FetchApi = () => {
    // const [url, setUrl] = useState('');
    const [globalData, setGlobalData] = useState({});
    const [countryData, setCountryData] = useState({});
    const [mapData, setMapData] = useState([]);

    useEffect(() => {
        async function globalData() {
            const response = await fetch("https://thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            setGlobalData({
                'Total Cases': data.results[0]['total_cases'],
                'Total Deaths': data.results[0]['total_deaths'],
                'Total Recovered': data.results[0]['total_recovered'],
                'Cases Today': data.results[0]['total_new_cases_today'],
                'Deaths Today': data.results[0]['total_new_deaths_today'],
                'Affected Countries': data.results[0]['total_affected_countries']
            }
            );

        }
        globalData();
    }, []);

    useEffect(()=>{
        async function countryData(){
            const response = await fetch('https://corona.lmao.ninja/v2/countries');
            let data = await response.json();
            setCountryData(data);
        }
        countryData();
    },[])
    return (
        {globalData,countryData}
    )
}

export default FetchApi;
