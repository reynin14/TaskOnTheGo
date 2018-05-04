import { SUBMIT_TASK } from '../actions/tasks';

const initialState = {
  toDoTasks: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SUBMIT_TASK:
    console.log(action.task);
      return {
        ...state,
        toDoTasks: [...action.task]
      }
    default:
      return state;
  }
};

export default reducer;
