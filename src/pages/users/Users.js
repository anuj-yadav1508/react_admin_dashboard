import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { DataGrid } from '@material-ui/data-grid';
import './users.css'
import { Avatar } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useState } from 'react';
import { Userrows } from '../../dummydata'
import { Link } from 'react-router-dom';

const Users = () => {

    const [data, setData] = useState(Userrows)

    const handleDelete = (id) => {
       const newData = data.filter((item) => item.id !== id)
        setData(newData)
    }

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
        return (
            <div className='tableUser'>
                <Avatar className='tableUserAvatar' src="/images/person_1.jpg" alt="" />
                <h4>{params.row.username}</h4>
            </div>
        )
    }
    
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 200,
    
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 140,
    
  },
  {
    field: 'Transaction',
    headerName: 'Transaction',
    width: 160,
  },
  {
      field: 'Actions',
      headerName: 'Actions',
      width:200,
      renderCell: (params) => {
          return(
              <div className="actionContainer">
                  <Link to={`/edituser/${params.row.id}`}>
                  <button className="editUserButton">Edit</button>
                  </Link>
                  <DeleteOutlineIcon className='deleteUserIcon' onClick={() => handleDelete(params.row.id)}/>
                  
              </div>
          )
      }
  }
];



    return (
        <>
        <Topbar />
        <div className='userSection'>
            <div className="userWrapper">
                <div className="userLeft">
                    <Sidebar />
                </div>
                <div className="userRight">
                    <div className="usersTableWrapper">
                     <DataGrid
                            rows={data}
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

export default Users
