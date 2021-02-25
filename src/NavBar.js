import React, {useState,} from 'react';
import { Button, AppBar,Typography,Toolbar,makeStyles,IconButton,Menu,MenuItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert';
function NavBar() {
    const classes = useStyles();
    const [mobileMenuAnchorEL, setMobileMenuAnchorEL] = useState(null);
     const isMobileMenuOpen = Boolean(mobileMenuAnchorEL);
     const openMobileMenu = (event) =>{
         setMobileMenuAnchorEL(event.currentTarget);
     };
     const closeMobileMenu = () =>{
         setMobileMenuAnchorEL(null);
     };
    const mobileMenu =(
        <Menu anchorEl={mobileMenuAnchorEL} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
            <MenuItem component={Link} to='/' onClick={closeMobileMenu}>Home</MenuItem>
            <MenuItem component={Link} to='/scanner' onClick={closeMobileMenu}>Scanner</MenuItem>
            <MenuItem component={Link} to='/List' onClick={closeMobileMenu}>List</MenuItem>
        </Menu>
    )
    return (
        <>
       <AppBar className={classes.title}>
       <Toolbar>
       <Typography variant="h5" style={{flexGrow: 2}}>
          SabPay
       </Typography>
       <div className={classes.sectionDesktop}>
       <Button color="inherit" component={Link} to='/'>HOME</Button>
       <Button color="inherit" component={Link} to='/scanner'>Scanner</Button>
       <Button color="inherit" component={Link} to='/List'>List6/</Button>
       </div>
       <IconButton color="inherit" onClick={openMobileMenu}>
           <MoreIcon/>
       </IconButton>
       </Toolbar>
       </AppBar>
       {mobileMenu}
       </>
    )
}

const useStyles = makeStyles((theme) => ({
    title:{
     background:'#cc00ff',
      color:'#ffff',
    },
    sectionDesktop:{
        display:"none",
        [theme.breakpoints.up("md")]:{
            display:"flex",
        },
        [theme.breakpoints.down("xl")]:{
            display:"none",
        }
    },
}));

export default NavBar
