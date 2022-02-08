import { FC, ReactElement, MouseEventHandler } from 'react'
import { auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate, RouteProps, Link } from 'react-router-dom'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HOME } from '../utils/constants'

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
    <div className="bg-secondary flex flex-col h-screen">
      <div className="max-w-lg bg-white shadow-sm mx-auto mt-auto px-24 pt-4 pb-10 rounded">
        <div className="font-primary text-3xl text-center mb-10">Login</div>
        <button
          type="button"
          className="bg-experience px-8 py-2 rounded transition transform shadow hover:-translate-y-1 hover:scale-110"
          onClick={signInWithGoogle}
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Sign In
        </button>
      </div>
      <div className="mx-auto mb-auto mt-4">
        <Link
          to={HOME}
          className="hover:bg-experience px-4 py-2 rounded hover:shadow transition-all"
        >
          <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Login
