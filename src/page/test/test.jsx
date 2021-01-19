import React , {Fragment} from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import './test.scss';
import bortherScss from './borther.module.scss'
// class 组件
class Test extends React.Component  {
    state =  {
      num:1,
      sonValue:'子组件传递参数原始值',
      inputValue:'',
      checkboxValue: true,
      defaultIptValue:'非受控表单默认值',
      brotherVal:'给兄弟组件传值(未传递)',
      Testson1Vis:true,//Testson1组件的显示状态
    }
    constructor() {
      super()
      this.ParentSonClick = this.ParentSonClick.bind(this)
      this.parentsonClickBorther = this.parentsonClickBorther.bind(this)
      this.inputReactDom = React.createRef()
    }
    componentDidMount() {
      console.log('componentDidMount挂载完成声明周期触发,一般在这里发送异步请求')
    }
    shouldComponentUpdate(nextProps,nextState) {
      // // 接收两个参数， nextState 和 nextProps ，表示修改后的  state 和 props 值。一般用在提高性能使用
      // console.log('shouldComponentUpdate是否更新render触发,一般判断render是否更新',nextProps,nextState)
      // // 当nextState.inputValue为奇数时,不进行渲染
      // if((nextState.inputValue)%2 === 0) {
      //   return true
      // } else {
      //   return false
      // }
      return true
    }
    componentDidUpdate() {
      // 会在更新后会被立即调用。首次渲染不会执行此方法
      console.log('会在更新后会被立即调用。首次渲染不会执行此方法,在render触发之后')
    }
    // 子组件触发父组件的值
    ParentSonClick(data) {
      console.log('父组件里打印:子组件传输的值',data)
      // const sonValue = this.state.sonValue
      this.setState({
        sonValue:data
      })
    }
    // 子组件触发父组件的值
    parentsonClickBorther(data) {
      console.log('父组件里打印:子组件传输的值(Test1)',data)
      // const sonValue = this.state.sonValue
      this.setState({
        brotherVal:data
      })
    }
    // input事件改变
    handleChangeValue(e) {
      // console.log('input事件改变',e)
      this.setState({
        inputValue: e.currentTarget.value
      })
    }
    // Checked事件改变
    handleChkChecked(e) {
      console.log('Checked事件改变',e.currentTarget.checked)
      this.setState({
        checkboxValue: e.currentTarget.checked
      })
    }
    // 获取输入框焦点
    getIptFocus = () => {
      console.log('获取输入框焦点',this.inputReactDom.current)
      this.inputReactDom.current.focus();
    }
    render() {
      console.log('父组件render被触发')
      return (
        <Fragment>
          <div className='parentNode'>
            我是class 组件(父组件)
            <h2>表单展示值:{this.state.inputValue}</h2>
            <h2>checkbox展示值:{this.state.checkboxValue ? 'true' : 'false'}</h2>
            <input type='text' ref={this.inputReactDom} value={this.state.inputValue} onChange={this.handleChangeValue.bind(this)}></input>
            <input type='checkbox' checked={this.state.checkboxValue} onChange={this.handleChkChecked.bind(this)}></input>
            
            <button onClick={ this.getIptFocus }>获取输入框焦点</button>
            <hr></hr>
            <input defaultValue={this.state.defaultIptValue}></input>
  
            <h1>子组件传输过来展示的值:{this.state.sonValue}</h1>
            <hr></hr>
            <button onClick={()=>{this.setState({Testson1Vis: !this.state.Testson1Vis})}}>控制Testson1组件的显示隐藏</button>
            <Testson sonClick={this.ParentSonClick} sonClickBorther={this.parentsonClickBorther} food={'xx我是父组件传输的食物dd'}>
              <span style={{color : 'yellow'} }>父组件通过插槽出传递的标签</span>
            </Testson>
            {
              this.state.Testson1Vis &&<Testson1 brotherVal={this.state.brotherVal}></Testson1>
            }
            <Testson2 brotherVal={this.state.brotherVal} ></Testson2>
            </div>
          
        </Fragment>
      )
    }
  }
  
  
  class Testson extends React.Component {
    state ={
      goParent:0
    }
    changeParent (data) {
      console.log("子组件里打印:点击获取的值:",data ,this.state.goParent)
      let {goParent} = this.state
      this.setState({
        goParent : goParent + 1
      })
      // value = value += 1
      this.props.sonClick(this.state.goParent)
    }
    changeBortherValue (data) {
      console.log("点击改变兄弟组件的值:")
      this.props.sonClickBorther('兄弟组件的值已改变')
    }
    render() {
      console.log('触发子组件render')
      return (
        <Fragment>
          <div className='sonNode'>
            <div>哈哈哈</div>
            <h1>我是test的子组件</h1>
            <h2>我是父组件传输过来的:{this.props.food}</h2>
            <button onClick={this.changeParent.bind(this)}>点击改变父组件的值</button>
            
            <div>插槽功能:{this.props.children}</div>
            <hr></hr>
            <button onClick={this.changeBortherValue.bind(this)}>点击改变兄弟组件的值</button>
            
          </div>
        </Fragment>
      )
    }
  }
  class Testson1 extends React.Component{
    componentWillUnmount() {
      // 在组件卸载及销毁之前直接调用，在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求等
      console.log('在组件卸载及销毁之前直接调用，在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求等')
    }
    render() {
      console.log('触发子组件test1的render')
      return (
        <>
        <h1>我是test的子组件1</h1>   
        <div className={bortherScss.bortherBox}>兄弟组件Testson 传输过来的值{this.props.brotherVal}</div>
        </>
      )
    }
  }
  // 高性能组件
  class Testson2 extends React.PureComponent{
    componentWillUnmount() {
      // 在组件卸载及销毁之前直接调用，在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求等
      console.log('在组件卸载及销毁之前直接调用，在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求等')
    }
    render() {
      console.log('高性能组件render触发')
      return (
        <>
        <h1>我是test的子组件2</h1>   
        <div className={bortherScss.bortherBox}>兄弟组件Testson 传输过来的值{this.props.brotherVal}</div>
        </>
      )
    }
  }
  // Testson.PropTypes = {
  //   food:propTypes.string
  // }
  // 类型声明
  Testson.propTypes  = {
    food:PropTypes.string
  };
  Testson.defaultProps = {
    food: "龙虾"
  }
  export default Test