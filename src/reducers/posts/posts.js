import { types } from "../../actions/types";

export default (initState = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return initState;
  }
};
