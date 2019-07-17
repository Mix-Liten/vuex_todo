import * as types from './mutations_type.js';

// state
export const state = {
  todos: [],
  status: 'all', // all:全部, incompleted:未完成, completed:已完成
}

// mutations
export const mutations = {
  [types.SETTODOS]: (state, payload) => (state.todos = payload),
  [types.ADDTODO]: (state, payload) => state.todos.unshift(payload),
  [types.DELETETODO]: (state, payload) =>
    (state.todos = state.todos.filter(todo => todo.id !== payload)),
  [types.UPDATETODO]: (state, payload) => {
    const index = state.todos.findIndex(todo => todo.id === payload.id);
    if (index !== -1) {
      state.todos.splice(index, 1, payload);
    }
  },
  [types.CHANGESTATUS](state, payload) {
    state.status = payload;
  },
};