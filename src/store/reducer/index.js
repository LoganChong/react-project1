// 1 定义默认数据，后期可以从接口中获取
const defaultState = {
    num: 10  
};
const reducerManage= (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    console.log('触发reducer action',action)
    if(action.type === 'add') {
        newState.num+=action.addValue;
        console.log('执行增加操作',newState)
        return newState
    } else if( action.type=== 'decrease') {
        newState.num--
        console.log('执行减少操作',newState)
        return newState
    } else if( action.type=== 'init') {
        newState.num = action.value
        console.log('执行初始化操作',newState)
        return newState
    }
    return state;
}

// 2 创建和对外暴露一个函数 返回state
export default reducerManage