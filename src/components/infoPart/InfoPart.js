import React from 'react'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'
import './infoPart.css'

const InfoPart = () => {
    return (
        <div className='infoPartSection'>
            <div className="infoPartWrapper">
                {/* infopart item */}
                <div className="infoPartItem">
                    <div className="infoPartItemHeading">
                        Revenue
                    </div>
                    <div className="infoPartTransaction">$1,289.92 <span className="infoPartTransactionSpan">-7.80 <ArrowDownwardOutlined className='spanIcon'/> </span></div>

                    <div className="infoPartItemBottom">Compared to the last month</div>
                </div>

                <div className="infoPartItem">
                    <div className="infoPartItemHeading">
                        Sales
                    </div>
                    <div className="infoPartTransaction">$1,974.36 <span className="infoPartTransactionSpan">-12.79 <ArrowDownwardOutlined className='spanIcon'/> </span></div>

                    <div className="infoPartItemBottom">Compared to the last month</div>
                </div>


                <div className="infoPartItem">
                    <div className="infoPartItemHeading">
                        Cost
                    </div>
                    <div className="infoPartTransaction">$1,634.55 <span className="infoPartTransactionSpan">+3.80 <ArrowUpwardOutlined className='spanIcon'/> </span></div>

                    <div className="infoPartItemBottom">Compared to the last month</div>
                </div>
            </div>
        </div>
    )
}

export default InfoPart
