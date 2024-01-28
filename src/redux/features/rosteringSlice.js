import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    task_id: "",
    driver_id: "",
    assign_task_to_driver: {},
  }
};

export const rosteringSlice = createSlice({
  name: "rostering",
  initialState,
  reducers: {
    /* if the driver is already chosen, add to assign_task_to_driver (key: the chosen task, value: the chosen driver)
       and reset task_id and driver_id
       else assign action.payload to task_id */
    assignTask: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          task_id: state.value.driver_id !== "" || state.value.task_id === action.payload ? "" : action.payload,
          driver_id: "",
          assign_task_to_driver: state.value.driver_id !== "" ? {
            ...state.value.assign_task_to_driver,
            [action.payload]: state.value.driver_id
          } : {
            ...state.value.assign_task_to_driver,
          }
        }
      };
    },
    /* if the task is already chosen, add to assign_task_to_driver (key: the chosen task, value: the chosen driver)
       and reset task_id and driver_id
       else assign action.payload to driver_id */
    assignDriver: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          task_id: "",
          driver_id: state.value.task_id !== "" || state.value.driver_id === action.payload ? "" : action.payload,
          assign_task_to_driver: state.value.task_id !== "" ? {
            ...state.value.assign_task_to_driver,
            [state.value.task_id]: action.payload
          } : {
            ...state.value.assign_task_to_driver,
          }
        }
      };
    },
    reset: (state) => {
      return initialState;
    }
  },
});

// Action creators are generated for each case reducer function
export const { assignTask, assignDriver, reset } = rosteringSlice.actions;