import React,{useState} from 'react'
import {useSelector , useDispatch} from "react-redux"

import http from '../../services/http'
import configData from "../../config/configData.json"
import {getUsers} from '../../store/users'
import "./Products.css"

function Users({}) {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)

    const [display , setDisplay] = useState({add  : false , update : false})
    const [userToModify, setUserToModify] = useState({
        name : "" , 
        email : "" , 
        password : "" ,
    })
    const [adminRole, setAdminRole] = useState((state) => {
        users.map(elm => {
            let admin = elm.isAdmin ? true : false
            state   = {...state ,  [elm._id] : admin} ;
        })
        return state 
    })

    const updateAdminRole = async (id, e) => {
        const value = JSON.parse(e.target.value)
        try{
            await http.put(configData.endpoint + "users/updateUser/" + id , {isAdmin : value} )
            dispatch(getUsers())
            setAdminRole({...adminRole , [id] : value })
        }
        catch(ex){
            console.log(ex.message)
        }  
    }


    const  handleUpdate =  (e) => {   
        const value = e.target.name === "isAdmin" ? JSON.parse(e.target.value) : e.target.value
        setUserToModify({...userToModify , [e.target.name] : value })
    }

    const handleAddSubmition = async(e) => {
        e.preventDefault() 
        try{
            await http.post(configData.endpoint + "users/register" , userToModify )
            dispatch(getUsers())
            setUserToModify({
                name : "" , 
                email : "" , 
                password : "" ,
            })
            setDisplay({...display , add : false })

        }
        catch(ex){
            console.log(ex)
        }
    }


    const handleUpdateSubmition = async(e) => {
        e.preventDefault()
        try{
            await http.put(configData.endpoint + "users/updateUser/" + userToModify._id , userToModify )
            dispatch(getUsers())
            setUserToModify({
                _id : "" , 
                name : "" , 
                email : "" , 
                password : "" ,
                isAdmin : ""
            })
            // update admin role localy 
            setAdminRole({...adminRole , [userToModify._id] : userToModify.isAdmin })
            // back to display all users
            setDisplay(true)
        }
        catch(ex){
            console.log(ex.message)
        }  
    }

    const deleteUser = async (id) => {
        try{
            await http.delete(configData.endpoint + "users/removeUser/" + id )
            dispatch(getUsers())
        }
        catch(ex){
            console.log(ex.message)
        }        
    }



    return (
        <div className='admin--body'>
            { !display.add && !display.update &&
            <div>
                <table className='admin--table'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>admin</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {   users &&
                    users.map((elm, index) => {
                        return (
                            <tr key={index}>
                                <td>{elm._id}</td>
                                <td>{elm.name}</td>
                                <td>{elm.email}</td>
                                <td>
                                    <select className='admin--select' value = {adminRole[elm._id] ? "true" : "false"} onChange={(e) => updateAdminRole(elm._id,e) } >
                                        <option value="true">true</option>
                                        <option value="false">false</option>
                                    </select>
                                </td>
                                <td className='admin--product_update'>
                                    <i onClick={() => {setUserToModify(elm); setDisplay({...display , update : true})}} style={{cursor : "pointer"}} class="fas fa-edit"></i>
                                </td>
                                <td ><i style={{cursor : "pointer"}}  onClick={() => deleteUser(elm._id)} class="fas fa-trash-alt"></i></td>
                            </tr>
                        )
                    })
                }
                </table>
                
                <div className='btn-container_product'>
                    <button onClick = {() => setDisplay({...display , add : true})} className='btn btn--secondary btn--dimentions_prodduct'>
                         New user
                    </button>
                </div>
            </div>
            }

            {(display.add || display.update )  &&
              <div className='add_user--container' >
                <form className='add_user'  onSubmit={(e) => {display.update ? handleUpdateSubmition(e) : handleAddSubmition(e)}}>
                    <table>
                        <tr>
                            <td>Name </td>
                            <td><input name = "name" type="text" value={userToModify.name} onChange={(e) => handleUpdate(e)}/></td>
                        </tr>
                        <tr>
                            <td>Email </td>
                            <td><input name = "email" type="text" value = {userToModify.email}  onChange={(e) => handleUpdate(e)} /> </td>
                        </tr>
                        <tr>
                            <td>Password </td>
                            <td><input name = "password" type="text" value = {userToModify.password}   onChange={(e) => handleUpdate(e)}/></td>
                        </tr>
                        <tr>
                            <td>Admin </td>
                            <td>
                                <select name = "isAdmin" className='admin--select admin--select__dim' value = {userToModify.isAdmin ? "true" : "false"}  onChange={(e) => handleUpdate(e)} >
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                    <div className='btn-container'><button className='btn btn--secondary btn--dimentions' type='submit'>Submit</button></div>
                    
                </form>
            </div>}
        </div>
    )
}

export default Users
