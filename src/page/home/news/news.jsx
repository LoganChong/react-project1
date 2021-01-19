import React , {Fragment} from 'react';
import {connect} from 'react-redux'
import { addAction,initAction } from '../../../store/actionCreator'
import { Button } from 'element-react';
class News extends React.Component{
    render() {
      return (
        <Fragment>
            <div>我是新闻页面</div>
            <h1>redux使用</h1>
            <h2>store中的数据{this.props.numState}</h2>

            <hr></hr>
            <Button onClick={this.props.handleClickAdd.bind(this,888)}>操作store中的数据(增加)</Button>
            <Button onClick={this.props.handleClickDecrease.bind(this,'减少')}>操作store中的数据(减少)</Button>

            <hr></hr>
            <Button onClick={this.props.handleClickInit.bind(this,1000)}>异步请求数据初始化store中的数据</Button>
        </Fragment>
      )
    }
}
const mapStoreToProps = (state) => {
  return {
    numState: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickAdd(data) {
      console.log(data)
      dispatch(addAction(data))
    },
    handleClickDecrease(data) {
      console.log(data)
      const action = {
        type:'decrease'
      }
      dispatch(action)
    },
    handleClickInit(data) {
      console.log(data)
      dispatch(initAction(data))
    },



  }
}
const newApp = connect(mapStoreToProps,mapDispatchToProps)(News)
export default newApp