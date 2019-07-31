import {INCREASE, DECREASE} from '../actions/type';

const initialState = 0;

const getData = (state = 1, action) => {
  switch (action.type) {
    case INCREASE:
    return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}
export default getData;
