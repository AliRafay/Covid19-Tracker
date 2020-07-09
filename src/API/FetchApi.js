import { useState, useEffect } from 'react'

const FetchApi = () => {
    const [globalData, setGlobalData] = useState({});
    const [countryData, setCountryData] = useState({});
    const [historicalData, setHistoricalData] = useState([]);
    useEffect(() => {
        async function globalData() {
            const response = await fetch("https://disease.sh/v3/covid-19/all");
            let data = await response.json();
            setGlobalData({
                'Total Cases': data['cases'],
                'Total Deaths': data['deaths'],
                'Total Recovered': data['recovered'],
                'Cases Today': data['todayCases'],
                'Deaths Today': data['todayDeaths'],
                'Affected Countries': data['affectedCountries']
            }
            );

        }
        globalData();
    }, []);

    useEffect(() => {
        async function getCountryData() {
            const response = await fetch('https://corona.lmao.ninja/v2/countries');
            let data = await response.json();
            setCountryData(data);
        }
        getCountryData();
    }, []);
    useEffect(() => {
        async function historicalData() {
            const response = await fetch('https://disease.sh/v2/historical/all?lastdays=120');
            let data = await response.json();
            setHistoricalData(data);
        }
        historicalData();
    }, [])

    return (
        { globalData, countryData, historicalData}
    )
}

export default FetchApi;
