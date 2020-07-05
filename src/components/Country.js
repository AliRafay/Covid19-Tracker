import React, { useState, useContext } from 'react'
import GridCard from'./MUIComponents/GridCard'
import { covidContext } from '../context/globalState'

const Country = () => {
    const subScreen=useState(0);
        return (
            <div>
                <GridCard subScreen={subScreen}/>
            </div>
        )
}

export default Country;
