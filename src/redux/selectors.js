import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priorities) => {
    const allTodoList = todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
    let todoRemaining;
    switch (status) {
      case "Todo":
        todoRemaining = allTodoList.filter((todo) => !todo.completed);
        break;
      case "Completed":
        todoRemaining = allTodoList.filter((todo) => todo.completed);
        break;
      default:
        //all
        todoRemaining = allTodoList;
        break;
    }
    // priority
    if (priorities.length) {
      todoRemaining = todoRemaining.filter((todo) => {
        return priorities.includes(todo.priority);
      });
    }

    return todoRemaining;
  },
);
