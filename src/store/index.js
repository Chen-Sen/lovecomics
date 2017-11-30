/**
 * Created by PC on 2017/10/4.
 */
import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import nominate from './modules/nominate'
import stacks from './modules/stacks'
import bookshelf from './modules/bookshelf'

Vue.use(vuex)

export default new vuex.Store({
  mutations,
  actions,
  modules: {
    nominate,
    stacks,
    bookshelf
  }
})
