import React  from 'react';
import {Menu} from 'element-react'

class Nav extends React.Component {
  state = {
    curPath: '',
    routeList:[
        {id:1,path:'/home/news',name:'新闻',icon:'el-icon-message'},
        {id:2,path:'/home/found',name:'发现',icon:'el-icon-menu'},
        {id:3,path:'/home/hot',name:'热门',icon:'el-icon-setting'},
        {id:4,path:'/home/game',name:'五子棋',icon:'el-icon-star-on'}
    ]
  }
  render() {
    return (
      <Menu defaultActive={this.state.curPath}  className="el-menu-vertical-demo" onSelect={this.onSelect.bind(this)} onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
          {
            this.state.routeList.map(item => {
                return(
                    <Menu.Item index={item.path} key={item.id}><i className={item.icon}></i>{item.name}</Menu.Item>
                    // <div className={`menu-item ${this.state.curPath === item.path ? 'menu-active' : ''}`} key={item.id} onClick={this.routeTo.bind(this,item.path)}>{item.name}</div>
                )
            })
          }
        </Menu>
    )
  }
  routeTo(path) {
    // this.props
  }
  onSelect(path) {
    this.setState({
        curPath:path
    })
    this.props.history.history.push(path)
  }
  onOpen() {
  
  }
  
  onClose() {
  
  }
}
export default Nav