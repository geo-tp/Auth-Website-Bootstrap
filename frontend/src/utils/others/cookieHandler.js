import Cookie from 'js-cookie'
import { store } from '../store'
import {
  setCookieAnswer,
  setIsConnected,
  setToken,
} from '../store/features/Auth/actions'

export const deleteTokenInCookie = () => {
  Cookie.remove('EBOUTIQUETOKEN')
  // Cookie.remove('EBAZARUSER')

  window.location = window.location.origin
}

export const retrieveUserDataInCookie = () => {
  console.log('STORE GET STATE', store.getState().auth.isConnected)

  if (!store.getState().auth.isConnected) {
    let token = Cookie.get('EBOUTIQUETOKEN')
    // let user = Cookie.get('EBAZARUSER')
    // console.log('TYPEOF USER', typeof user)
    console.log('TYPEOF TOKEN', typeof token)
    console.log('IN RETRIEVE COOKIE', token)

    let cookieAccepted = Cookie.get('EBOUTIQUEACCEPTCOOKIE')

    if (token) {
      console.log('IN USER AND token')
      store.dispatch(setToken({ key: token }))
      store.dispatch(setIsConnected(true))
    }

    if (cookieAccepted) {
      console.log('écoookiiie', cookieAccepted)
      store.dispatch(setCookieAnswer(cookieAccepted))
    }
  }
}

export const setTokenInCookie = (token) => {
  Cookie.set('EBOUTIQUETOKEN', token)
  // Cookie.set('EBAZARUSER', JSON.stringify(user))
}

export const setCookieAnswerInCookie = () => {
  Cookie.set('EBOUTIQUEACCEPTCOOKIE', 1)
}
