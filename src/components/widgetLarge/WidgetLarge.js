import { Avatar } from '@material-ui/core'
import React from 'react'
import './widgetLarge.css'

const WidgetLarge = () => {

    const ButtonChange = ({type}) => {
        return <button className={`button${type}`}>{type}</button>
    }
    return (
        <div className='widgetLargeSection'>
            <div className="widgetLargeHeading">Latest Transactions</div>

            <table className="widgetLargeTable">
                <thead>
                <tr className='widgetTableRow'>
                    <th className="widgetLargeTableHeading">Customer</th>
                    <th className="widgetLargeTableHeading">Date</th>
                    <th className="widgetLargeTableHeading">Amount</th>
                    <th className="widgetLargeTableHeading">Status</th>
                </tr>
                </thead>

                <tbody>
                    {/* first row */}
                <tr>
                    <td className="userColumn">
                        <Avatar className='userColumnAvatar' src="/images/person_1.jpg" />
                        <div className="userColumnUsername">Shivani Yaduvanshi</div>
                    </td>

                    <td className="dateColumn">15 Aug, 2021</td>
                    <td className="amountColumn">$758</td>
                    <td className="statusColumn"><ButtonChange type="Approved" /></td>
                </tr>

                {/* second Row */}
                <tr>
                    <td className="userColumn">
                        <Avatar className='userColumnAvatar' src="/images/person_1.jpg" />
                        <div className="userColumnUsername">Anuj Yaduvanshi</div>
                    </td>

                    <td className="dateColumn">15 Aug, 2021</td>
                    <td className="amountColumn">$758</td>
                    <td className="statusColumn"><ButtonChange type="Approved" /></td>
                </tr>

                {/* third row */}
                <tr>
                    <td className="userColumn">
                        <Avatar className='userColumnAvatar' src="/images/person_1.jpg" />
                        <div className="userColumnUsername">Eshaan Yaduvanshi</div>
                    </td>

                    <td className="dateColumn">15 Aug, 2021</td>
                    <td className="amountColumn">$758</td>
                    <td className="statusColumn"><ButtonChange type="Declined" /></td>
                </tr>

                {/* fourth row */}
                <tr>
                    <td className="userColumn">
                        <Avatar className='userColumnAvatar' src="/images/person_1.jpg" />
                        <div className="userColumnUsername">Pulkit Yaduvanshi</div>
                    </td>

                    <td className="dateColumn">15 Aug, 2021</td>
                    <td className="amountColumn">$758</td>
                    <td className="statusColumn"><ButtonChange type="Declined" /></td>
                </tr>

                {/* fifth row */}
                <tr>
                    <td className="userColumn">
                        <Avatar className='userColumnAvatar' src="/images/person_1.jpg" />
                        <div className="userColumnUsername">Manu Yaduvanshi</div>
                    </td>

                    <td className="dateColumn">15 Aug, 2021</td>
                    <td className="amountColumn">$758</td>
                    <td className="statusColumn"><ButtonChange type="Approved" /></td>
                </tr>

                {/* sixth row */}
                <tr>
                    <td className="userColumn">
                        <Avatar className='userColumnAvatar' src="/images/person_1.jpg" />
                        <div className="userColumnUsername">Jahanvi Yaduvanshi</div>
                    </td>

                    <td className="dateColumn">15 Aug, 2021</td>
                    <td className="amountColumn">$758</td>
                    <td className="statusColumn"><ButtonChange type="Declined" /></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLarge
