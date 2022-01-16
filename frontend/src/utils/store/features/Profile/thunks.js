import { getProfile } from './selectors'
import { fetchProfile, fetchProfileError, fetchProfileSuccess } from './actions'
import { PROFILE_ROUTE } from '../../../api/ROUTES'
import { parametersFormater } from '../../../others/parametersFormater'

export const profileThunk = () => {
  return async (dispatch, getState) => {
    const profile = getProfile(getState())

    if (profile.isLoading || profile.isUpdating) {
      return
    }

    dispatch(fetchProfile())
    try {
      const params = parametersFormater('GET')
      const response = await fetch(PROFILE_ROUTE, params)
      const data = await response.json()

      if (response.status !== 200) {
        throw data
      }

      dispatch(fetchProfileSuccess(data))
    } catch (error) {
      dispatch(fetchProfileError(error))
    }
  }
}
