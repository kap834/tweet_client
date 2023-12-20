import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    token: ''
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token
  },
  mutations: {
  },
  actions: {
    userData: ({state} , value) => state.user = value,
    userToken: ({state} , value) => state.token = value
  },
  modules: {
  }
})
