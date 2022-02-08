const initialState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};
export default todoReducer;
