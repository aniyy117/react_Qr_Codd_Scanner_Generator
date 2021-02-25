import React,{useState,useEffect} from 'react';
import { makeStyles, Grid,} from '@material-ui/core';
import axios from 'axios';


function List() {
    
    const[users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        loadUsers();
      },[ ]);
    
      const loadUsers = async () =>{
        const result = await axios.get("http://localhost:3003/user");
         setUsers(result.data.reverse());
      }
      
    return (
        <Grid item xl={12} lg={12} md={6} sm={12} xs={12}>
         <div>
              <h1>List of student</h1>
              <table className={classes.tb}>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Student name</th>
                <th scope="col">Field code</th> 
                <th scope="col">Uniqe id</th>
               </tr>
            <tbody>
                {
                  users.map((user, index) =>(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.uname}</td>
                    <td>{user.code}</td>
                    <td>{user.uniqueid}</td>
                    </tr>
                  ))
                }
               </tbody>
              </table>
            </div>
        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
    container:{
      marginTop:70
    },
    title:{
     background:'#cc00ff',
      color:'#ffff',
    },
    btn: {
      marginTop:10,
      marginBottom:20,
      background:'#cc00ff'

    },
    tb:{
      width:'100%',
    }
}));

export default List
