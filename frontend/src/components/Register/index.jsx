import { useState } from 'react'
import fetchRegistration from '../../utils/fetch/fetchRegistration'
import { extractMessageFromApiResponse } from '../../utils/others/extractMessageFormApiResponse'

const Register = () => {
  const [responseFromApi, setResponseFromApi] = useState('')

  const [pseudo, setPseudo] = useState('')
  const [mail, setMail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const validatePassword = () => {
    return password1 === password2
  }

  const apiCall = async (e) => {
    e.preventDefault()
    setResponseFromApi('')

    if (validatePassword()) {
      const response = await fetchRegistration(
        mail,
        pseudo,
        password1,
        password2
      )
      setResponseFromApi(extractMessageFromApiResponse(response))
    } else {
      setResponseFromApi('Passwords are not equals')
    }
  }

  return (
    <div>
      <form onSubmit={(e) => apiCall(e)}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
      <p>{responseFromApi}</p>
    </div>
  )
}

export default Register
