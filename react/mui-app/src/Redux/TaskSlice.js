import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: [{ id: 2, title: "visiting temple", done: false }],
};
const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
      add: (state, action) => {
          console.log(action)
      state.task.push(action.payload);
    },
    del: (state, action) => {
      const result = state.task.filter((item) => item.id === action.payload);
      state.task = [...result];
    },
  },
});
export default TaskSlice.reducer;
// console.log(TaskSlice.actions);
export const { add, del } = TaskSlice.actions;
