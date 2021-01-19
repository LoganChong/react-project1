import axios from 'axios'
export const addAction = (data) => {
    return {
        type:'add',
        addValue:data
    }
}

export const initAction = (data) => {
    return (dispatch)=>{
       axios.get('https://api.zbztb.cn/api/pubulic/v1/home/swiperdata')
       .then(res => {
           let num = res.data.message.length;
           const action = {
               type:'init',
               value: num
           }
           dispatch(action)
       }).catch(error => {
           console.error('报错信息',error)
           const action1 = {
            type:'init',
            value: '么有后台接口啦'
        }
        dispatch(action1)
       })
    }
}
