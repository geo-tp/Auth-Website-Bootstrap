import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from '../../utils/store/features/Auth/thunks'
import { getProfile } from '../../utils/store/features/Profile/selectors'
import { profileThunk } from '../../utils/store/features/Profile/thunks'

const Profile = () => {
  const profile = useSelector(getProfile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(profileThunk())
  }, [dispatch])

  const logoutClick = (e) => {
    e.preventDefault()
    dispatch(logoutThunk())
  }

  console.log(profile)
  return (
    <div>
      <p>Profil</p>
      <button
        onClick={(e) => {
          logoutClick(e)
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
