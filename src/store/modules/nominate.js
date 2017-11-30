/**
 * Created by newuser on 2017/9/12.
 */
import * as types from '../mutation-types'

const state = {
  index: 0,
  timer: 1,
  length: 0
}

const mutations = {
  [types.RECEIVE_LENGTH] (state, length) {
    state.length = length
  }
}

const actions = {
  startTransition ({commit, state}, {obj, imgWidth}) {
    state.index = 0
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      commit(types.ADD_TRANSITION, {obj})
      commit(types.SET_TRANSLATE, {obj, offsetX: -state.index * imgWidth})
    }, 1500)
  }
}

export default {
  state,
  mutations,
  actions
}
