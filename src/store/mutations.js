/**
 * Created by PC on 2017/10/4.
 */
import * as types from './mutation-types'

export default {
  [types.ADD_TRANSITION] (state, {obj}) {
    obj.style.transition = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  [types.REMOVE_TRANSITION] (state, {obj}) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  },
  [types.SET_TRANSLATE] (state, {obj, offsetX}) {
    obj.style.transform = 'translateX(' + offsetX + 'px)'
    obj.style.webkitTransform = 'translateX(' + offsetX + 'px)'
  }
}
