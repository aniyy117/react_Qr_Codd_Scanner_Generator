import React,{useState, useRef} from 'react'
import QrReader from 'react-qr-reader';
import { makeStyles, Grid,Button} from '@material-ui/core';
function Scanner() {
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam , setScanResultWebCam] = useState('');
    const classes = useStyles();
    const qrRef = useRef(null);
  
    const handleErrorFile = (error) =>{
       //alert(error.message);
       console.log(error);
    }
    const handleScanFile = (result) =>{
      if(result){
          setScanResultFile(result)
      }
    }
  
    const onScanFile=() =>{
       qrRef.current.openImageDialog();
    }
  
    const handleErrorWebCam =(error)=>{
      console.log(error);
    }
    const handleScanWebCam = (result) =>{
      if(result){
          setScanResultWebCam(result);
      }
    }
    return (
        <>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan QR Code</Button>
        <QrReader 
          ref={qrRef}
          delay={200}
          style={{width:'70%'}}
          onError={handleErrorFile}
          onScan={handleScanFile}
          legacyMode
        />
        <h3>Scanned Code : {scanResultFile}</h3>
      </Grid>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <h3>Qr Code Scan By Web Cam</h3>
        <QrReader
          delay={300}
          style={{width: '100%'}}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
         <h3>Scanned By Web Camera Code : {scanResultWebCam}</h3>
      </Grid>
      </>
    )
}
const useStyles = makeStyles((theme) => ({
    title:{
     background:'#cc00ff',
      color:'#ffff',
    },
    btn: {
      marginTop:10,
      marginBottom:20,
      background:'#cc00ff'

    }
}));
export default Scanner
