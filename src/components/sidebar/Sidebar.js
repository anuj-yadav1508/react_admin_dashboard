import React from 'react'
import { Home, Timeline, TrendingUp, PersonOutlineOutlined, StorefrontOutlined, AttachmentOutlined, BarChartOutlined, MailOutlineOutlined, FeedbackOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, ErrorOutlined } from '@material-ui/icons'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebarSection'>
            
                <div className="sidebarItem">
                    <h3 className="sidebarItemHeading">Dashbaord</h3>

                    {/* sidebaritem list */}
                    <ul className="sidebarItemList">
                        <Link to='/' >
                            <li className="sidebarItemItem">
                                <Home className='sidebarIcon homeIcon' />
                                <span className="sidebarSpan">Home</span>
                            </li>
                        </Link>

                        <Link to='/analyticspage'>
                            <li className="sidebarItemItem">
                                <Timeline className='sidebarIcon' />
                                <span className="sidebarSpan">Analytics</span>
                            </li>
                        </Link>

                        <Link to='/analyticspage'>
                            <li className="sidebarItemItem">
                                <TrendingUp className='sidebarIcon' />
                                <span className="sidebarSpan">Sales</span>
                            </li>
                        </Link>
                    </ul>
                </div>


                <div className="sidebarItem">
                <h3 className="sidebarItemHeading">Quick Menu</h3>

                    {/* sidebaritem list */}
                    <ul className="sidebarItemList">
                        <Link to='/users'>
                        <li className="sidebarItemItem" style={{textDecoration:'none'}}>
                            <PersonOutlineOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Users</span>
                        </li>
                        </Link>

                        <Link to='/products'>
                        <li className="sidebarItemItem">
                            <StorefrontOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Products</span>
                        </li>
                        </Link>

                        <li className="sidebarItemItem">
                            <AttachmentOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Transactions</span>
                        </li>

                        <li className="sidebarItemItem">
                            <BarChartOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Reports</span>
                        </li>
                    </ul>
                </div>


                <div className="sidebarItem">
                    <h3 className="sidebarItemHeading">Notifications</h3>

                    {/* sidebaritem list */}
                    <ul className="sidebarItemList">
                        <li className="sidebarItemItem">
                            <MailOutlineOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Mails</span>
                        </li>

                        <li className="sidebarItemItem">
                            <FeedbackOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Feedback</span>
                        </li>

                        <li className="sidebarItemItem">
                            <ChatBubbleOutlineOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Messages</span>
                        </li>
                    </ul>
                </div>

                <div className="sidebarItem">
                    <h3 className="sidebarItemHeading">Staff</h3>

                    {/* sidebaritem list */}
                    <ul className="sidebarItemList">
                        <li className="sidebarItemItem">
                            <WorkOutlineOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Manage</span>
                        </li>

                        <li className="sidebarItemItem">
                            <ErrorOutlined className='sidebarIcon' />
                            <span className="sidebarSpan">Error</span>
                        </li>
                    </ul>
                </div>
            
        </div>
    )
}

export default Sidebar
