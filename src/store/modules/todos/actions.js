import axios from '@/_axios';
import * as types from './mutations_type';

export const fetchTodos = async ({
  commit
}) => {
  const response = await axios.get('/todos');
  commit(types.SETTODOS, response.data);
}

export const addTodo = async ({
  commit
}, title) => {
  const response = await axios.post('/todos', {
    title,
    completed: false
  });
  commit(types.ADDTODO, response.data);
}

export const deleteTodo = async ({
  commit
}, index) => {
  await axios.delete(`/todos/${index}`);
  commit(types.DELETETODO, index);
}

export const updateTodo = async ({
  commit
}, payload) => {
  const response = await axios.put(`/todos/${payload.id}`, payload);
  // eslint-disable-next-line
  console.log(response.data);
  commit(types.UPDATETODO, response.data);
}

export const limitTodos = async ({
  commit
}, {evt, status}) => {
  // Get selected number
  const limit = parseInt(
    evt.target.options[evt.target.options.selectedIndex].innerText
  );
  let url = `/todos?_limit=${limit}`;
  if (status == 'completed') {
    url += '&completed=true'
  } else if (status == 'inCompleted') {
    url += '&completed=false'
  }
  const response = await axios.get(url);
  commit(types.SETTODOS, response.data);
}

export const changeStatus = ({
  commit
}, payload) => {
  commit(types.CHANGESTATUS, payload);
}

export const filterTodos = async ({
  commit
}, payload) => {
  let url = '/todos';
  if (payload && payload == 'completed') {
    url += '?completed=true'
  } else if (payload && payload == 'inCompleted') {
    url += '?completed=false'
  }
  const response = await axios.get(url);
  commit(types.SETTODOS, response.data);
}