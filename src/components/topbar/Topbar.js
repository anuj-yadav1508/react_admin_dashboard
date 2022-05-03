import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './topbar.css'

const Topbar = () => {
    return (
        <div className='topbarSection'>
            <div className="topbarLeft">
                <Link to='/'>
                    <div className="topbarLogo">REACTADMIN</div>
                </Link>
            </div>
            <div className="topbarRight">
                <div className="topbarRightIcons">
                    <div className="topbarRightIconContainer">
                        <NotificationsIcon className='topbarRightIcon' />
                        <div className="topbarRightBadge">2</div>
                    </div>

                    <div className="topbarRightIconContainer">
                        <LanguageIcon className='topbarRightIcon' />
                        <div className="topbarRightBadge">1</div>
                    </div>

                    <div className="topbarRightIconContainer">
                        <SettingsIcon className='topbarRightIcon' />
                        <div className="topbarRightBadge">4</div>
                    </div>
                    
                </div>
                <div className="topbarRightAvatar">
                    <Avatar className='topbarRightAvatarIcon' src='/images/person_1.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
