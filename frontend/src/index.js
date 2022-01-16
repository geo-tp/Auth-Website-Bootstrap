import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import AuthPage from './pages/AuthPage'
import { Provider } from 'react-redux'
import { store } from './utils/store'
import ProfilePage from './pages/ProfilePage'
import { retrieveUserDataInCookie } from './utils/others/cookieHandler'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsConnected } from './utils/store/features/Auth/selectors'

function RequireAuth({ children }) {
  let isAuthenticated = useSelector(getIsConnected)
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/auth/" />
}

retrieveUserDataInCookie()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
