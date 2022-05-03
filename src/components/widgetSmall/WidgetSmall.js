import { Avatar } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSmall.css'

const WidgetSmall = () => {
    return (
        <div className='widgetSection'>
            <div className="widgetHeading">New Join Members</div>

            <ul className="widgetList">
                <li className="widgetListItem">
                    <Avatar className='widgetItemAvatar' src='images/person_1.jpg' />
                    <div className="widgetListItemInfo">
                        <h3 className="widgetListItemUsername">Shivani Yaduvanshi</h3>
                        <h5 className="widgetListItemQualification">Software Enginerr</h5>
                    </div>
                    <div className="widgetListItemButton">
                        <Visibility className='widgetVisibilityIcon' />
                        <span className="widgetListItemSpan">Display</span>
                    </div>
                </li>

                  
                <li className="widgetListItem">
                    <Avatar className='widgetItemAvatar' src='images/person_1.jpg' />
                    <div className="widgetListItemInfo">
                        <h3 className="widgetListItemUsername">Anuj Yaduvanshi</h3>
                        <h5 className="widgetListItemQualification">Software Enginerr</h5>
                    </div>
                    <div className="widgetListItemButton">
                        <Visibility className='widgetVisibilityIcon' />
                        <span className="widgetListItemSpan">Display</span>
                    </div>
                </li>

                  
                <li className="widgetListItem">
                    <Avatar className='widgetItemAvatar' src='images/person_1.jpg' />
                    <div className="widgetListItemInfo">
                        <h3 className="widgetListItemUsername">Pulkit Yaduvanshi</h3>
                        <h5 className="widgetListItemQualification">Software Enginerr</h5>
                    </div>
                    <div className="widgetListItemButton">
                        <Visibility className='widgetVisibilityIcon' />
                        <span className="widgetListItemSpan">Display</span>
                    </div>
                </li>


                   
                <li className="widgetListItem">
                    <Avatar className='widgetItemAvatar' src='images/person_1.jpg' />
                    <div className="widgetListItemInfo">
                        <h3 className="widgetListItemUsername">Parul Yaduvanshi</h3>
                        <h5 className="widgetListItemQualification">Software Enginerr</h5>
                    </div>
                    <div className="widgetListItemButton">
                        <Visibility className='widgetVisibilityIcon' />
                        <span className="widgetListItemSpan">Display</span>
                    </div>
                </li>


                <li className="widgetListItem">
                    <Avatar className='widgetItemAvatar' src='images/person_1.jpg' />
                    <div className="widgetListItemInfo">
                        <h3 className="widgetListItemUsername">Eshaan Yaduvanshi</h3>
                        <h5 className="widgetListItemQualification">Software Enginerr</h5>
                    </div>
                    <div className="widgetListItemButton">
                        <Visibility className='widgetVisibilityIcon' />
                        <span className="widgetListItemSpan">Display</span>
                    </div>
                </li>

                  
                <li className="widgetListItem">
                    <Avatar className='widgetItemAvatar' src='images/person_1.jpg' />
                    <div className="widgetListItemInfo">
                        <h3 className="widgetListItemUsername">Shanaya Yaduvanshi</h3>
                        <h5 className="widgetListItemQualification">Software Enginerr</h5>
                    </div>
                    <div className="widgetListItemButton">
                        <Visibility className='widgetVisibilityIcon' />
                        <span className="widgetListItemSpan">Display</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall
