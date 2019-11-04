import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    addCart: [],
    xxarr:[]
  },
  mutations: {
    app(state, id) {
      var index = state.addCart.findIndex(v => {
        return v.id == id.id;
      });
      if (index == -1) {
        state.addCart.push(id);
      } else {
        for (var i in state.addCart) {
          state.addCart[i].num += 1;
        }
      }
    },
    xx(state,obj){
      state.xxarr.push(obj)
    }
    
  },
  // plugins: [createPersistedState()],
  actions: {},
  modules: {}
});
