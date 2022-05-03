import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './products.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummydata';
import { Link } from 'react-router-dom';

const Products = () => {

    const [product, setProduct] = useState(productRows)

    const handleDelete = (id) => {
        setProduct(product.filter(item => item.id !== id))
    }

    const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'product',
    headerName: 'Product',
    width: 200,
    renderCell : (params) => {
        return (
            <div className='productColumn' >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWZyW_7EQrb2Os9RFkNrV9uHHjQ-Z8VlPGw&usqp=CAU" alt="" className="productColumnImage" />

                <h4 className="productColumnProductname">{params.row.productName}</h4>
            </div>
        )
    }
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160
  },
  {
    field: 'price',
    headerName: 'Price', 
    width: 160,
  },
  {
      field:'Action',
      headerName:"Action",
      width:200,
      renderCell: (params) => {
          return (
              <div className="actionColumn">
                  <Link to={`/editproduct/${params.row.id}`}>
                    <button className="editProductButton">Edit</button>
                  </Link>
                  <DeleteOutline className='deleteProductIcon' onClick={() => handleDelete(params.row.id)} />
              </div>
          )
      }
  }
];




    return (
        <>
        <Topbar />
        <div className='editProductSection'>
            <div className="editProductWrapper">
                <div className="editProductLeft">
                    <Sidebar />
                </div>
                <div className="editProductRight">
                    <div className="editProductRightWrapper">
                        <DataGrid
                            rows={product}
                            columns={columns}
                            pageSize={8}
                            checkboxSelection 
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Products
