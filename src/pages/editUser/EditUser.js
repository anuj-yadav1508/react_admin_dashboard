import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './editUser.css'
import { Avatar } from '@material-ui/core'
import { PersonOutlineOutlined, PhoneIphone, MailOutline, LocationSearching, CalendarToday, Publish } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'


const EditUser = () => {
    const userId = useParams().userid
    return (
        <>
        <Topbar />
        <div className='editUserSection'>
            <div className="editUserWrapper">
                <div className="editUserLeft">
                    <Sidebar />
                </div>
                <div className="editUserRight">

                    {/* edit user heading and create button */}
                    <div className="editUserTop">
                        <h1 className="editUserHeading">Edit User</h1>
                        <Link to={`/createuser/${userId}`}>
                        <button className="editUserCreateButton">Create</button>
                        </Link>
                    </div>

                    {/* edit user bottom */}
                    <div className="editUserBottom">

                    
                    <div className="editUserRightInfo">
                        
                        <div className="editUserInfoTop">
                            <Avatar className='editUserAvatar' src='/images/person_1.jpg' />
                            <div className="editUserRightUserCredentials">
                                <h2 className="editUserRightUsername">Shivani Yaduvanshi</h2>
                                <h5 className="editUserRightQualification">Software Engineer</h5>
                            </div>
                            
                        </div>

                        {/* edit user info account details */}
                        <div className="editUserInfoAccountDetails">
                            <h5 className="accountDetailsHeading">Account Details</h5>
                            <p className="accountDetailsPara"><span className="accountSpan"><PersonOutlineOutlined /></span>vaani1508</p>

                            <p className="accountDetailsPara"><span className="accountSpan"><CalendarToday /></span>15-08-2021</p>
                        </div>

                        {/* edit user contact details */}
                        <div className="editUserContactDetails">
                            <h5 className="editUserContactHeading">Contact Details</h5>
                            <p className="editUserContactPara"><span className="contactParaSpan"><PhoneIphone /></span>+ 95873243</p>
                            
                            <p className="editUserContactPara"><span className="contactParaSpan"><MailOutline /></span>vaani1508@gmail.com</p>

                            <p className="editUserContactPara"><span className="contactParaSpan"><LocationSearching /></span>Mangolpura</p>
                        </div>
                    </div>

                    {/* update user Starting */}
                    <div className="editUserRightUpdate">
                       <div className="editUserUpdateLeft">
                           <h3 className="editUserUpdateLeftHeading">Edit</h3>

                           <div className="editUserUpdateLeftForm">
                               <div className="editUserInputGroup">
                                   <label className="editUserLeftLabel">Username</label>
                                    <br />
                                    <input type="text" className="editUserLeftInput" placeholder='vaani1508' />
                               </div>

                               <div className="editUserInputGroup">
                                   <label className="editUserLeftLabel">Fullname</label>
                                    <br />
                                    <input type="text" className="editUserLeftInput" placeholder='Shivani Yaduvanshi' />
                               </div>

                               <div className="editUserInputGroup">
                                   <label className="editUserLeftLabel">Email</label>
                                    <br />
                                    <input type="text" className="editUserLeftInput" placeholder='vaani1508@gmail.com' />
                               </div>


                               <div className="editUserInputGroup">
                                   <label className="editUserLeftLabel">Phone</label>
                                    <br />
                                    <input type="text" className="editUserLeftInput" placeholder='87579320' />
                               </div>


                               <div className="editUserInputGroup">
                                   <label className="editUserLeftLabel">Address</label>
                                    <br />
                                    <input type="text" className="editUserLeftInput" placeholder='Mangolpura' />
                               </div>
                           </div>
                       </div>

                       <div className="editUserUpdateRight">
                        {/* top part */}
                           <div className="editUserUpdateRightTop">
                                <div className="editUserUpdateRightImageContainer">
                                    <img src="/images/person_1.jpg" alt="" className="editUserUpdateRightImage" />
                                    </div>
                                    <Publish className='publishIcon' />
                           </div>
                           {/* bottom part */}
                           <div className="editUserUpdateRightBottom">
                               <button className="editUserUpdateRightButton">Update</button>
                           </div>
                       </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditUser
