import React from 'react'
import './chart.css'
 import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({data, datakey, title, grid}) => {
    
    return (
        <div className='chartSection'>
            <div className="chartWrapper">
                <h3 className="chartHeading">{title}</h3>
                <ResponsiveContainer width='100%' aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey='Month' />
                        <Line type='monotone' dataKey={datakey}  />
                        <Tooltip  />
                        { grid && <CartesianGrid strokeDasharray="5 5" /> }
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
