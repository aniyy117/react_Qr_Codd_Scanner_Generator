import React from 'react';
import {Container, Card, CardContent, makeStyles, Grid,} from '@material-ui/core';
import Navbar from './NavBar'
import Home from './Home'
import Scanner from './Scanner'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import List from './List';

function App() {
  const classes = useStyles();
  return (
   <BrowserRouter>
      <Container className={classes.container}>
         <Card>
           <Navbar/>
         </Card>
         <CardContent>
           <Grid container spacing={2}>
             <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/scanner" component={Scanner} />
               <Route exact path="/List" component={List} />
             </Switch> 
           </Grid>
         </CardContent>
    </Container>
   </BrowserRouter>
  );
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

     }
}));
export default App;
