import React from 'react'
import NavTabs from './MUIComponents/NavTabs'

const Header = ({screenConfig}) => {
    return (
        <div className="header">
            <center><h1>COVID-19 TRACKER</h1></center>
            <NavTabs screenConfig={screenConfig}/>
        </div>
    )
}

export default Header
