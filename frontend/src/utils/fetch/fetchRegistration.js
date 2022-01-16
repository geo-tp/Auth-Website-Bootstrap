import { REGISTRATION_ROUTE } from '../api/ROUTES'
import { parametersFormater } from '../others/parametersFormater'

const fetchRegistration = (email, pseudo, password1, password2) => {
  let params = parametersFormater('POST', {
    email,
    pseudo,
    password1,
    password2,
  })

  return fetch(REGISTRATION_ROUTE, params)
    .then((response) => {
      return response.json()
    })

    .then((data) => {
      return data
    })

    .catch((error) => {
      return error
    })
}

export default fetchRegistration
