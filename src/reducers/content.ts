/**
 *
 * User Reducer
 *
 *  */

import { SET_CONTENT } from 'actions/content';

const initialState = {
  data: null,
};

export const contentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CONTENT:
      return {
        data: action.content,
      };
    default:
      return state;
  }
};

export default contentReducer;
