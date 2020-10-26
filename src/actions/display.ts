/**
 *
 * Display Actions
 *
 *  */

export const SET_DIMENSIONS = 'SET_DIMENSIONS';
export const clearUser = () => ({
  type: SET_DIMENSIONS,
});

export const OPEN_MENU = 'OPEN_MENU';
export const openMenu = () => ({
  type: OPEN_MENU,
});

export const CLOSE_MENU = 'CLOSE_MENU';
export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const FONT_LOADED = 'FONT_LOADED';
export const fontLoaded = () => ({
  type: FONT_LOADED,
});

export const FONT_LOADING = 'FONT_LOADING';
export const fontLoading = () => ({
  type: FONT_LOADING,
});

export const SET_IS_SCROLLED = 'SET_IS_SCROLLED';
export const setIsScrolled = (isScrolled) => ({
  type: SET_IS_SCROLLED,
  isScrolled,
});
