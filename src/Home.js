import React,{useState } from 'react'
import { makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Home() {
  let history = useHistory();
    const [user,setUser] = useState({
      uname: "",
      code:"",
     uniqueid:""
    })
    const [imageUrl, setImageURl] = useState('');

    const classes = useStyles();
    const generateQrCode= async ()=>{
        try{
             const response = await QRCode.toDataURL(uniqueid);
             setImageURl(response);
        }catch(error){
          console.log(error);
        }
      }

      
      const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
      }
      const {uname,code,uniqueid}= user;
    
      const onSubmit = async e =>{
        e.preventDefault();
        await axios.push("http://localhost:3003/user" , user);
        history.push("/list")
      }
    
    return (
      <form onSubmit={e => onSubmit(e)}>
        <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
           <TextField label="Enter Full Name" name="uname" value={uname} onChange={e=>onInputChange(e)} />
           <TextField label="Enter Field of student" name="code" value={code} onChange={e=>onInputChange(e)} />
           <TextField label="Enter unique code " name="uniqueid" value={uniqueid} onChange={e=>onInputChange(e)}/>
           <Button className={classes.btn} variant="contained" color="primary" onClick={()=>{ generateQrCode();} }>Genrate</Button>
    
            <br/>
            <br/> 
            {imageUrl ? (<a href={imageUrl} download>
                            <img src={imageUrl} alt="image"/>
                       </a> ) : null}
        </Grid>
    </form>
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

export default Home
