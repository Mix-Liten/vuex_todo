export const allTodos = state => {
  return state.todos;
}

export const status = state => {
  return state.status;
}

export const getAllCount = state => {
  return state.todos.length;
}

export const getCompletedCount = state => {
  return state.todos.filter((element, index) => state.todos[index].completed).length;
}

export const getIncompleteCount = state => {
  return state.todos.filter((element, index) => !state.todos[index].completed).length;
}