import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../src/views/Login'
import Signup from '../src/views/Signup'
import Home from '../src/views/Home'
import Detail from '../src/views/Detail'
import Cart from '../src/views/Cart'
import Admin from '../src/views/Admin'
import BookAdmin from '../src/views/BookAdmin'

import Navbar from '../src/components/Navbar'
import CusDrawer from '../src/components/CusDrawer'
import NavbarRev from '../src/components/NavbarRev'


const LoginContainer = ()=>(
  <div className="container">
      <Route path='/login' component={Login}/>
      <Route signup path='/signup' component={Signup}/>
  </div>
  
)

const AdminContainer = ()=>(
  <div className="container">
    <CusDrawer/>
    <Switch>
      <Route exact path="/admin/books" component={BookAdmin}></Route>
      <Route  path="/admin/category"></Route>
      <Route  path="/admin/user"></Route>

    </Switch>
  </div>
)


const DefaultContainer = ()=>(
  <div className="container">
      {/* <Navbar/> */}
      <NavbarRev/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/product/:id' component={Detail}/>
        <Route path='/cart/:id_cart' component={Cart}/> 
        <Route component={AdminContainer}/> 


      </Switch>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>


          <Route exact component={DefaultContainer}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
