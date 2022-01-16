import {
  FETCH_PROFILE,
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_SUCCESS,
} from './constants'

export const fetchProfile = () => ({
  type: FETCH_PROFILE,
})

export const fetchProfileError = (error) => ({
  type: FETCH_PROFILE_ERROR,
  payload: { error },
})

export const fetchProfileSuccess = (data) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: { data },
})
