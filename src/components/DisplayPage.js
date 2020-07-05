import React from 'react'
import Global from './Global'
import Country from './Country'

const DisplayPage = ({ currentScreen }) => {

    if (currentScreen === 0)
        return <Global />
    else if (currentScreen === 1)
        return <Country />
    // else return <AllCountries />
}
export default DisplayPage;
