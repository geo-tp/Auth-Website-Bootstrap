import HEADERS from '../api/HEADERS'
import { store } from '../store'
import { getAuth } from '../store/features/Auth/selectors'

const addTokenIfExist = () => {
  let token = getAuth(store.getState()).key
  console.log(token)

  if (token) {
    HEADERS['Authorization'] = 'Token ' + token
  }
}

export const parametersFormater = (method, body = null) => {
  if (!HEADERS.hasOwnProperty('Authorization')) {
    addTokenIfExist()
  }

  switch (method) {
    case 'GET':
    case 'DELETE':
      return { method: method, headers: HEADERS }

    case 'PUT':
    case 'PATCH':
    case 'POST':
      return { method: method, headers: HEADERS, body: JSON.stringify(body) }

    default:
      return {}
  }
}
