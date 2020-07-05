import React from 'react'
import GridPaper from './MUIComponents/GridPaper'
import LineChart from './Chart'

const Global = () => {
    return (
        <div>
            <GridPaper />
            <div className='chart-div'>
            <LineChart />
            </div>
        </div>
    )
}

export default Global;