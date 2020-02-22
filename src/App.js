import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../src/views/Login'
import Signup from '../src/views/Signup'
import Home from '../src/views/Home'
import Detail from '../src/views/Detail'
import Cart from '../src/views/Cart'
import Navbar from '../src/components/Navbar'


const LoginContainer = ()=>(
  <div className="container">
      <Route path='/login' component={Login}/>
      <Route signup path='/signup' component={Signup}/>
  </div>
  
)


const DefaultContainer = ()=>(
  <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/product/:id' component={Detail}/>
        <Route path='/cart/:id_cart' component={Cart}/> 

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
