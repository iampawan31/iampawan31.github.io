import { FC, ReactElement, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { LOGIN, DASHBOARD, HOME } from './utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'

const App: FC = (): ReactElement => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState<boolean>(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate(LOGIN)
    })
  }

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login setIsAuth={setIsAuth} />} />
      <Route
        path={DASHBOARD}
        element={<Dashboard signUserOut={signUserOut} />}
      />
    </Routes>
  )
}

export default App
