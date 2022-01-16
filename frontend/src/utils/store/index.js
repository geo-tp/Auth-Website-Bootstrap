import { combineReducers } from 'redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './features/Auth/reducer'
import { profileReducer } from './features/Profile/reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)
