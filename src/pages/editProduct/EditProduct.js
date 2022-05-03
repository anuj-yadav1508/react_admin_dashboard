import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './editProduct.css'
import Chart from '../../components/charts/Chart'
import { productsData } from '../../dummydata'
import { Avatar } from '@material-ui/core'
import { Publish } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'


const EditProduct = () => {
    const productId = useParams().productid
    return (
        <>
        <Topbar />
        <div className='editProductSection'>
            <div className="editProductWrapper">
                <div className="editProductLeft">
                    <Sidebar />
                </div>
                <div className="editProductRight">
                    <div className="editProductTop">
                        <h3 className="editProductHeading">Edit Product</h3>
                        <Link to={`/createproduct/${productId}`}>
                            <button className="createProductButton">Create</button>
                        </Link>
                    </div>

                    {/* edit product center */}
                    <div className="editProductCenter">
                        <div className="editProductSalesPerformance">    
                            <Chart data={productsData} datakey='Sold Products' title='Sales Performance' className='editProductChart' />
                        </div>

                        <div className="editProductSingle">
                            <div className="singleProductTop">
                                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWZyW_7EQrb2Os9RFkNrV9uHHjQ-Z8VlPGw&usqp=CAU' className='singleProductAvatar' />
                                <div className="singleProductName">Iphone 12 pro</div>
                            </div>

                            <p className="singleProductPara"><span className="singleProductSpan">id:</span>685</p>
                            <p className="singleProductPara"><span className="singleProductSpan">sales:</span>4576</p>
                            <p className="singleProductPara"><span className="singleProductSpan">active:</span>yes</p>
                            <p className="singleProductPara"><span className="singleProductSpan">In stock:</span>yes</p>
                        </div>
                    </div>

                    {/* edit product bottom */}
                    <div className="editProductBottom">
                        <div className="editProductBottomLeft">
                            <form className="editProductForm">
                                <div className="editProductInputGroup">
                                    <label  className="editProductLabel">Product Name</label>
                                    <input type="text" className="editProductInput" placeholder='Iphone 12 pro' />
                                </div>

                                <div className="editProductInputGroup">
                                    <label className="editProductLabel">In Stock</label>
                                    <br />
                                    <select className='editProductSelect' >
                                        <option className='option'  value="Yes">Yes</option>
                                        <option className='option'  value="No">No</option>
                                    </select>
                                </div>

                                <div className="editProductInputGroup">
                                    <label className="editProductLabel">Active</label>
                                    <br />
                                    <select className='editProductSelect' >
                                        <option className='option'  value="Yes">Yes</option>
                                        <option className='option'  value="No">No</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="editProductBottomRight">
                            <div className="editProductBottomTop">
                                <div className="productImageContainer">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWZyW_7EQrb2Os9RFkNrV9uHHjQ-Z8VlPGw&usqp=CAU' className='singleProductAvatar" alt="" className="productImage" />
                                </div>
                                <Publish className='editProductPublishIcon' />
                            </div>
                                
                                <div className="editProductBottomBottom">
                                    <button className="updateProduct">Update</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditProduct
