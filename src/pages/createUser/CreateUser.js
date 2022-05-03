import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './createUser.css'

const CreateUser = () => {
    return (
        <>
        <Topbar />
        <div className='createUserSection'>
            <div className="createUserWrapper">
                <div className="createUserLeft">
                    <Sidebar />
                </div>
                <div className="createUserRight">
                    <div className="createUserRightTop">
                        <h3 className="createUserRightHeading">New User</h3>

                        <div className="createUserRightForm">

                            {/* form Left */}
                            <div className="createUserFormLeft">
                                <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Username</label>
                                <br />
                                <input type="text" className="createUserRightInput" placeholder='vaani1508' />
                            </div>

                            <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Email</label>
                                <br />
                                <input type="text" className="createUserRightInput" placeholder='vaani1508@gmail.com' />
                            </div>

                            <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Phone</label>
                                <br />
                                <input type="text" className="createUserRightInput" placeholder='12347550' />
                            </div>

                            <div className="createUserRightInputGroup">
                                <label className="createUserRightLabel">Gender</label>
                                <br />
                                <div className='createUserRightRadioList'>
                                    <div className="radioInputGroup">
                                        <input type="radio" value="Male" name="gender" className='radioListInput' /> Male
                                    </div>
                                    
                                    <div className="radioInputGroup">
                                    <input type="radio" value="Female" name="gender" className='radioListInput' /> Female
                                    </div>

                                    <div className="radioInputGroup">
                                    <input type="radio" value="Other" name="gender" className='radioListInput' /> Other
                                    </div>
                                 </div>
                            </div>
                            </div>
                            
                            {/* form right */}
                            <div className="createUserFormRight">
                                <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Fullname</label>
                                <br />
                                <input type="text" className="createUserRightInput" placeholder='Shivani Yaduvanshi' />
                            </div>

                            <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Password</label>
                                <br />
                                <input type="text" className="createUserRightInput" placeholder='password' />
                            </div>


                            <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Address</label>
                                <br />
                                <input type="text" className="createUserRightInput" placeholder='Mangolpura' />
                            </div>


                            <div className="createUserRightInputGroup">
                                <label  className="createUserRightLabel">Active</label>
                                <br />
                                <select className='createUserDropDown' >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    
                                </select>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="createUserRightBottom">
                        <button className="createUserCreateButton">Create</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateUser
