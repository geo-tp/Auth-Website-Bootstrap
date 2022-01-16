import { authInitialState } from './state'
import {
  FETCH_LOGIN,
  FETCH_LOGOUT,
  FETCH_LOGOUT_ERROR,
  FETCH_LOGOUT_SUCCESS,
  SET_COOKIE_ANSWER,
  SET_IS_CONNECTED,
  SET_TOKEN,
} from './constants'
import { FETCH_LOGIN_ERROR } from './constants'
import { FETCH_LOGIN_SUCCESS } from './constants'

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isUpdating: false,
        isConnected: false,
        key: null,
        error: null,
      }

    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isUpdating: false,
        isConnected: false,
        key: null,
        error: action.payload.error,
      }

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isUpdating: false,
        isConnected: true,
        ...action.payload.data,
        error: null,
      }

    case FETCH_LOGOUT:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isUpdating: false,
        error: null,
      }

    case FETCH_LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }

    case FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isUpdating: false,
        isConnected: false,
        key: null,
        error: null,
      }

    case SET_IS_CONNECTED:
      return {
        ...state,
        ...action.payload,
      }

    case SET_TOKEN:
      return {
        ...state,
        ...action.payload.key,
      }

    case SET_COOKIE_ANSWER:
      return {
        ...state,
        cookieAnswer: action.payload.cookieAccept,
      }

    default:
      return state
  }
}
