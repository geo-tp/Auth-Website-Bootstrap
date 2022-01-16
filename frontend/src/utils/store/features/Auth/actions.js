import {
  FETCH_LOGIN,
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGOUT,
  FETCH_LOGOUT_ERROR,
  FETCH_LOGOUT_SUCCESS,
  SET_COOKIE_ANSWER,
  SET_IS_CONNECTED,
  SET_TOKEN,
} from './constants'

export const fetchLogin = () => ({
  type: FETCH_LOGIN,
})

export const fetchLoginError = (error) => ({
  type: FETCH_LOGIN_ERROR,
  payload: { error },
})

export const fetchLoginSuccess = (data) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: { data },
})

export const fetchLougout = () => ({
  type: FETCH_LOGOUT,
})

export const fetchLogoutSuccess = () => ({
  type: FETCH_LOGOUT_SUCCESS,
  payload: { key: null, isConnected: false },
})

export const fetchLogoutError = (error) => ({
  type: FETCH_LOGOUT_ERROR,
  payload: { error },
})

export const setCookieAnswer = (cookieAccepted) => ({
  type: SET_COOKIE_ANSWER,
  payload: { cookieAccepted },
})

export const setToken = (key) => ({
  type: SET_TOKEN,
  payload: { key },
})

export const setIsConnected = (bool) => ({
  type: SET_IS_CONNECTED,
  payload: { isConnected: bool },
})
