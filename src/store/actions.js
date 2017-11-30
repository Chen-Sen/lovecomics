/**
 * Created by PC on 2017/10/4.
 */

import * as types from './mutation-types'

export const transitionEnd = (context, {obj, callback}) => {
  if (typeof obj === 'object') {
    obj.addEventListener('webkitTransitionEnd', function () {
      callback && callback()
    })
    obj.addEventListener('transitionEnd', function () {
      callback && callback()
    })
  }
}
export const transitionAgain = ({commit, state}, {obj, modules}) => {
  if (state[modules].index >= state[modules].length) {
    state[modules].index = 0
    commit(types.REMOVE_TRANSITION, {obj})
    commit(types.SET_TRANSLATE, {obj, offsetX: 0})
  }
}
