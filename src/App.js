import React  from 'react';
import { HashRouter as Router, Route, NavLink, Switch , Redirect,Lifecycle } from "react-router-dom";
import './App.css';
import Test from './page/test/test.jsx'
import Home from './page/home/home.jsx'
import 'element-theme-default';

// 函数式组件
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <div className='linkBox'>
            <NavLink to="/home" className='link' activeClassName='nav-active' >Home</NavLink>
            <NavLink to="/Test" className='link' activeClassName='nav-active'>Test</NavLink>
            <NavLink to="/users" className='link' activeClassName='nav-active'>Users</NavLink>
        </div> */}
        <Switch>
          <Route path="/Test" component={Test} />
          <Route path="/users" component={Users} />
          <Route path="/home" component={Home} />
          <Route path="/404" component={PageNotFound} />
          <Route path="/" >
            <Redirect to="/home"></Redirect>
          </Route>
          <Redirect to="/404/" ></Redirect>
        </Switch>
        </Router>
      </div>
    );
  }  
}
const Users = ()=> <h1 style={{background:'yellow'}}>用户</h1>
const PageNotFound = ()=> <h1 style={{background:'darkkhaki'}}>无数据啦</h1>
export default App;
