
// 引入一个仓库 生成器负责创建仓库
import { createStore ,applyMiddleware} from 'redux'
// 引入管理员
import reducer from './reducer'

import reduxThunk from 'redux-thunk'

// 导出仓库
export default createStore(reducer,applyMiddleware(reduxThunk))