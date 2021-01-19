import React  from 'react';
import { Menu } from 'element-react'
class Header extends React.Component {
  state = {
    curPath: '',
    routeList:[
        {id:1,path:'/home/news',name:'新闻',icon:'el-icon-message'},
        {id:2,path:'/home/found',name:'发现',icon:'el-icon-menu'},
        {id:3,path:'/home/hot',name:'热门',icon:'el-icon-setting'}
    ]
  }
  render() {
    return  (
      <div className='header'>
        <div onClick={this.changModel.bind(this)} className='header-item'>切换模块</div>
        <div className='header-item'>用户信息</div>
      </div>
    )
  }
  changModel() {
    console.log(this)
    this.props.history.push('/Test')
  }
}
export default Header