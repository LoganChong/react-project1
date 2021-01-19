import React , {Fragment} from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import './home.scss'
import News from './news/news.jsx'
import Nav from './nav/index'
import Header from './header/index'
import Game from '../../components/game/game.js'

class Home extends React.Component{
    state = {
       
    }
    render() {
        return (
        <Fragment>
            {/* <h1 style={{background:'red'}}>我是首页啦</h1> */}
            <Header history={this.props.history}></Header>
            <div className='main'>
                <div className='menu'>
                    <Nav history={this.props}></Nav>
                </div>
                <div className='content'>
                <Router>
                  <Switch>
                    <Route path="/home/news" component={News} />
                    <Route path="/home/found" component={Found} />
                    <Route path="/home/hot" exact component={Hot} />
                    <Route path="/home/game" exact component={Game} />
                  </Switch>
                </Router>
                </div>
            </div>
        </Fragment>
      )
    }
}

class Found extends React.Component{
    render() {
        return (
            <div>我是发现页面</div>
        )
    }
}
const Hot = () => <div>我是热门页面</div>
export default Home