import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  SET_STATUS,
  SEARCH_TODO,
} from '../../types';

const DUMMY_TODO = [
  {
    id: 'todo-42031',
    title: 'Add Search Todo functionality',
    description:
      'For todo react app, a search functionality will be added and user will be able to search or filter todos according to date, title or contents',
    dateAdded: '2021-05-04',
    target: 'Make full functional search',
    isCompleted: false,
  },
  {
    id: 'todo-12123',
    title: 'Learn React',
    description: 'I will try to learn react within 10 months',
    dateAdded: '2017-06-01',
    target: 'learn within 10 months',
    isCompleted: false,
  },
  {
    id: 'todo-12125',
    title: 'Learn TypeScript',
    description: 'I will try to learn typescript within 1 month',
    dateAdded: '2017-07-01',
    target: 'learn within 1 month',
    isCompleted: true,
  },
  {
    id: 'todo-12786',
    title: 'Learn Nodejs',
    description: 'I will try to learn nodejs within 12 months',
    dateAdded: '2017-07-06',
    target: 'learn within 12 months',
    isCompleted: true,
  },
];

const initState = {
  todos: DUMMY_TODO,
  allTodos: DUMMY_TODO,
  showFilter: false,
  search: '',
  currentFilter: 'all',
};

const todoReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        allTodos: [payload, ...state.allTodos],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        allTodos: state.allTodos.filter((todo) => todo.id !== payload),
      };

    case SET_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
        allTodos: state.allTodos.map((todo) =>
          todo.id === payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };

    case FILTER_TODO:
      let filteredTodos;

      switch (payload) {
        case 'completed':
          filteredTodos = state.allTodos.filter((todo) => todo.isCompleted);
          break;

        case 'incomplete':
          filteredTodos = state.allTodos.filter((todo) => !todo.isCompleted);
          break;

        default:
          filteredTodos = state.allTodos;
          break;
      }

      return {
        ...state,
        todos: filteredTodos,
        currentFilter: payload,
      };

    case SEARCH_TODO:
      const searchResult = state.allTodos.filter(
        (todo) =>
          todo.title.includes(payload) ||
          todo.description.includes(payload) ||
          todo.target.includes(payload) ||
          todo.dateAdded.includes(payload)
      );

      return {
        ...state,
        todos: searchResult,
      };

    default:
      return state;
  }
};

export default todoReducer;
