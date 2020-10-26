/**
 *
 * User Actions
 *
 *  */

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setUser = (user: any) => ({
  type: SET_CURRENT_USER,
  user,
});

export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const clearUser = () => ({
  type: CLEAR_CURRENT_USER,
});
