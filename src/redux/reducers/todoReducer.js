import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "../types";

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: // You can put it into '' and not import it
      return {
        ...state,
        todos: [
          ...(state.todos || []),
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      const deleted = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { todos: deleted };
    case MARK_COMPLETE:
      const completed = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { todos: completed };
    default:
      return state;
  }
}
