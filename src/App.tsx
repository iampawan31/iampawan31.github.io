import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { FC, ReactElement, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { auth, db } from './firebase-config'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import { DASHBOARD, HOME, LOGIN } from './utils/constants'

const App: FC = (): ReactElement => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [portfolio, setPortfolio] = useState<any>([])
  const portfolioCollectionRef = collection(db, 'portfolio')

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const data = await getDocs(portfolioCollectionRef)

        setPortfolio(
          data.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      } catch (error) {
        setPortfolio([])
      }
    }

    getPortfolio()
  }, [])

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
