import { getAuth, getIsConnected } from './selectors'
import {
  fetchLogin,
  fetchLoginError,
  fetchLoginSuccess,
  fetchLogoutError,
  fetchLogoutSuccess,
  fetchLougout,
} from './actions'
import { LOGIN_ROUTE, LOGOUT_ROUTE } from '../../../api/ROUTES'
import { parametersFormater } from '../../../others/parametersFormater'
import { extractMessageFromApiResponse } from '../../../others/extractMessageFormApiResponse'
import {
  deleteTokenInCookie,
  setTokenInCookie,
} from '../../../others/cookieHandler'

export const loginThunk = (email, password) => {
  return async (dispatch, getState) => {
    const auth = getAuth(getState())

    if (auth.isLoading || auth.isUpdating) {
      return
    }

    dispatch(fetchLogin())
    try {
      const params = parametersFormater('POST', { email, password })
      const response = await fetch(LOGIN_ROUTE, params)
      const data = await response.json()

      if (response.status !== 200) {
        throw data
      }
      dispatch(fetchLoginSuccess(data))
      setTokenInCookie(data.key)
    } catch (error) {
      dispatch(fetchLoginError(extractMessageFromApiResponse(error)))
    }
  }
}

export const logoutThunk = () => {
  return async (dispatch, getState) => {
    if (!getIsConnected(getState())) {
      return
    }

    dispatch(fetchLougout())
    try {
      const params = parametersFormater('POST', {})
      const response = await fetch(LOGOUT_ROUTE, params)
      const data = await response.json()

      if (response.status !== 200) {
        throw data
      }

      deleteTokenInCookie()
      dispatch(fetchLogoutSuccess())
    } catch (error) {
      dispatch(fetchLogoutError(error))
    }
  }
}
