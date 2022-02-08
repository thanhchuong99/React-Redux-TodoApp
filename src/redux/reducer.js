import filtersReducer from "../components/Filters/FiltersSlice";
import todoReducer from "../components/TodoList/TodoSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoReducer,
});
export default rootReducer;
