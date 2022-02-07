import { FC, ReactElement, MouseEventHandler } from 'react'
import { auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate, RouteProps } from 'react-router-dom'

type LoginProps = {
  setIsAuth: Function
}

const Login: FC<LoginProps & RouteProps> = ({ setIsAuth }): ReactElement => {
  const navigate = useNavigate()

  const signInWithGoogle: MouseEventHandler<HTMLButtonElement> = (): any => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true)
      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('userInfo', JSON.stringify(result))
      navigate('/dashboard')
    })
  }

  return (
    <div className="bg-off-white h-screen">
      <div className="max-w-lg bg-white shadow-sm grid justify-center mx-auto content-center h-96">
        <h1>Login</h1>
        <button type="button" className="bg-red" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
