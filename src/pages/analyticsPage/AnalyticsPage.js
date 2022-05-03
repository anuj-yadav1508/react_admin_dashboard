import React from 'react'
import Chart from '../../components/charts/Chart'

import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { usersData } from '../../dummydata'
import './analyticsPage.css'

const AnalyticsPage = () => {
  return (
    <>
            <Topbar />
        <div className='homeSection'>
            <div className="homeWrapper">
                <div className="homeWrapperLeft">
                    <Sidebar />
                </div>
                <div className="homeWrapperRight">
                    <div className="anayticsHeadingContainer">
                        <h1 className="analyticsHeading">User Analytics and Sale :</h1>
                        <div className="underline"></div>
                    </div>
                    <Chart data={usersData} datakey="Active Users" grid title='Users Analytics' />

                    
                </div>
            </div>
        </div>
        </>
  )
}

export default AnalyticsPage