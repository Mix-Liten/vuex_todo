import {
  state,
  mutations
} from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'

export default {
  strict: true, // 嚴格模式，禁止直接修改 state
  state,
  mutations,
  getters,
  actions,
};