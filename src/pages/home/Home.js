import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import InfoPart from '../../components/infoPart/InfoPart'
import Chart from '../../components/charts/Chart'
import { usersData } from '../../dummydata'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'

const Home = () => {
    return (
        <>
            <Topbar />
        <div className='homeSection'>
            <div className="homeWrapper">
                <div className="homeWrapperLeft">
                    <Sidebar />
                </div>
                <div className="homeWrapperRight">
                    <InfoPart />
                    <Chart data={usersData} datakey="Active Users" grid title='Users Analytics' />

                    <div className="widgetSections">
                        <div className="widgetSmall">
                            <WidgetSmall />
                        </div>
                        <div className="widgetLarge">
                            <WidgetLarge />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
