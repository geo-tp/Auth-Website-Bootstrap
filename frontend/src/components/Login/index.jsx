import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../utils/store/features/Auth/thunks'
import { getProfile } from '../../utils/store/features/Profile/selectors'

const Login = () => {
  const [responseFromApi, setResponseFromApi] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const profile = useSelector(getProfile)

  const apiCall = (e) => {
    e.preventDefault()
    if (email && password) {
      dispatch(loginThunk(email, password))
    }
  }

  console.log('USER', profile)
  console.log(profile.error)

  return (
    <div>
      <form onSubmit={(e) => apiCall(e)}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>

        <button type="submit">Submit</button>
      </form>
      <p>{profile.error}</p>
    </div>
  )
}

export default Login
