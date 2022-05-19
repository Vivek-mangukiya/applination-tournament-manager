import {
  GET_EVENT_POOL_SCHEDULE,
  GET_EVENT_POOL_SCHEDULE_LOADING,
  GET_POOLS_ALL,
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_EVENT_POOL_SCHEDULE:
      return {
        ...state,
        eventPoolScheduleData: action.payload,
        eventPollScheduleLoading: false,
      };
    case GET_EVENT_POOL_SCHEDULE_LOADING:
      return {
        ...state,
        eventPollScheduleLoading: true,
      };
    case GET_POOLS_ALL:
      return {
        ...state,
        poolListData: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
