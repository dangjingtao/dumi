// 引入接口请求
import { getChannelData, getChannelDataBySearch } from './services.js';

const model = {
  namespace: 'more', // 命名空间 在组件中你可以通过this.props.more拿到状态
  state: {
    data: [],
  }, // 定义组件状态和初始值:获取数据对应组件内的 const { data } = this.props.more;
  effects: {
    *getChannelData ({ payload }, { call, put }) {
      // call的方法和原生js的call很相似，前者为方法fn，后者为参数`...args`。
      const response = yield call(getChannelData, payload);


      // 根据返回值设置state
      // 拿到response 之后，必须发出action，然后这个action被reducer监听，从而达到更新state的目的。
      // 相应的这里的put对应与redux中的dispatch，
      yield put({
        type: 'channelData',
        payload: response,
      });
    },
    *getChannelDataBySearch ({ payload }, { call, put }) {
      // payload 传参 
      const response = yield call(getChannelDataBySearch, payload);
      yield put({
        type: 'channelData',
        payload: response,
      });
    },
  },
  reducers: {
    // 设置状态
    channelData (state, { payload }) {
      return { // 返回结构，这里只有data一个状态
        ...state,
        data: [...payload.data]
      };
    },
  },
};
export default model;