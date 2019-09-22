import {
   GET_LOGS,
   LOGS_ERROR,
   SET_LOADING,
   ADD_LOG,
   DELETE_LOG
} from '../actions/types';

const initialState = {
   logs: [],
   current: null,
   loading: false
};

export default (state = initialState, action) => {
   switch (action.type) {
      case GET_LOGS:
         return {
            ...state,
            logs: action.payload,
            loading: false
         };
      case ADD_LOG:
         return {
            ...state,
            logs: [...state.logs, action.payload],
            loading: false
         };
      case DELETE_LOG:
         return {
            ...state,
            logs: state.logs.filter(log => log.id !== action.payload),
            loading: false
         };
      case LOGS_ERROR:
         console.log(action.payload);
         return {
            ...state,
            error: action.payload
         };
      case SET_LOADING:
         return {
            ...state,
            loading: true
         };

      default:
         return state;
   }
};