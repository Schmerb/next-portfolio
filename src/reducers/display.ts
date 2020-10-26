/**
 *
 * Display Reducer
 *
 *  */

import {
  SET_DIMENSIONS,
  OPEN_MENU,
  CLOSE_MENU,
  TOGGLE_MENU,
  FONT_LOADING,
  FONT_LOADED,
  SET_IS_SCROLLED,
} from 'actions/display';

const initialState = {
  menuIsOpen: false,
  fontLoading: false,
  fontIsLoaded: false,
  isScrolled: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DIMENSIONS:
      return {
        ...state,
      };
    case OPEN_MENU:
      return {
        ...state,
        menuIsOpen: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: false,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };
    case FONT_LOADING:
      return {
        ...state,
        fontLoading: true,
      };
    case FONT_LOADED:
      return {
        ...state,
        fontLoading: false,
        fontIsLoaded: true,
      };
    case SET_IS_SCROLLED: {
      return {
        ...state,
        isScrolled: action.isScrolled,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
