import {
  FETCH_PROFILE,
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_SUCCESS,
} from './constants'
import { profileInitialState } from './state'

export const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isUpdating: false,
        data: {},
        error: null,
      }

    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isUpdating: false,
        data: {},
        error: action.payload.error,
      }

    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isUpdating: false,
        data: action.payload.data,
        error: null,
      }

    default:
      return state
  }
}
