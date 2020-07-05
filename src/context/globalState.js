import React, { createContext } from 'react'
import FetchApi from '../API/FetchApi';


export const covidContext=createContext();

const CovidProvider = ({children}) => {

    const {globalData,countryData}=FetchApi();
    return (
        <covidContext.Provider value={{
            globalData,
            countryData,
        }}>
            {children}
        </covidContext.Provider>
    )
}

export default CovidProvider
