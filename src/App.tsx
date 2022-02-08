import { FC, ReactElement, useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { LOGIN, DASHBOARD, HOME } from './utils/constants'
import { signOut } from 'firebase/auth'
import { auth, db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const App: FC = (): ReactElement => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [portfolio, setPortfolio] = useState<any>([])
  const portfolioCollectionRef = collection(db, 'portfolio')

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await getDocs(portfolioCollectionRef)
      setPortfolio(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    }

    getPortfolio()
  })

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate(LOGIN)
    })
  }

  return (
    <Routes>
      <Route path={HOME} element={<Home portfolio={portfolio} />} />
      <Route path={LOGIN} element={<Login setIsAuth={setIsAuth} />} />
      <Route
        path={DASHBOARD}
        element={<Dashboard signUserOut={signUserOut} />}
      />
    </Routes>
  )
}

export default App
