import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "../types";

let nextId = 0;

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    title,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const markComplete = (id) => ({
  type: MARK_COMPLETE,
  payload: {
    id,
  },
});
