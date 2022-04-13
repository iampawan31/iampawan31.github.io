import { FC, ReactElement } from 'react'
import { ReactComponent as AWSLogo } from '../tech-icons/amazonaws.svg'
import { ReactComponent as BootstrapLogo } from '../tech-icons/bootstrap.svg'
import { ReactComponent as CodeigniterLogo } from '../tech-icons/codeigniter.svg'
import { ReactComponent as Css3Logo } from '../tech-icons/css3.svg'
import { ReactComponent as DOLogo } from '../tech-icons/digitalocean.svg'
import { ReactComponent as ExpressLogo } from '../tech-icons/express.svg'
import { ReactComponent as FirebaseLogo } from '../tech-icons/firebase.svg'
import { ReactComponent as GithubLogo } from '../tech-icons/github.svg'
import { ReactComponent as GithubPagesLogo } from '../tech-icons/githubpages.svg'
import { ReactComponent as HTML5Logo } from '../tech-icons/html5.svg'
import { ReactComponent as JavascriptLogo } from '../tech-icons/javascript.svg'
import { ReactComponent as LaravelLogo } from '../tech-icons/laravel.svg'
import { ReactComponent as MuiLogo } from '../tech-icons/mui.svg'
import { ReactComponent as MySqlLogo } from '../tech-icons/mysql.svg'
import { ReactComponent as NextJsLogo } from '../tech-icons/nextjs.svg'
import { ReactComponent as NodeJsLogo } from '../tech-icons/nodedotjs.svg'
import { ReactComponent as NuxtJsLogo } from '../tech-icons/nuxtjs.svg'
import { ReactComponent as PHPLogo } from '../tech-icons/php.svg'
import { ReactComponent as PixabayLogo } from '../tech-icons/pixabay.svg'
import { ReactComponent as ReactLogo } from '../tech-icons/react.svg'
import { ReactComponent as SassLogo } from '../tech-icons/sass.svg'
import { ReactComponent as SqliteLogo } from '../tech-icons/sqlite.svg'
import { ReactComponent as TailwindCssLogo } from '../tech-icons/tailwindcss.svg'
import { ReactComponent as TypescriptLogo } from '../tech-icons/typescript.svg'
import { ReactComponent as VercelLogo } from '../tech-icons/vercel.svg'
import { ReactComponent as VSCodeLogo } from '../tech-icons/visualstudiocode.svg'
import { ReactComponent as VuejsLogo } from '../tech-icons/vuejs.svg'
import { ReactComponent as VuetifyjsLogo } from '../tech-icons/vuetify.svg'
import { ReactComponent as WordpressLogo } from '../tech-icons/wordpress.svg'
import { EXPERTISE } from '../utils/constants'

const getIcon = (name: string) => {
  switch (name) {
    case EXPERTISE.AWS:
      return <AWSLogo />
    case EXPERTISE.BOOTSTRAP:
      return <BootstrapLogo />
    case EXPERTISE.CSS3:
      return <Css3Logo />
    case EXPERTISE.CODEIGNITER:
      return <CodeigniterLogo />
    case EXPERTISE.DIGITALOCEAN:
      return <DOLogo />
    case EXPERTISE.EXPRESS:
      return <ExpressLogo />
    case EXPERTISE.FIREBASE:
      return <FirebaseLogo />
    case EXPERTISE.GITHUB:
      return <GithubLogo />
    case EXPERTISE.GITHUB_PAGES:
      return <GithubPagesLogo />
    case EXPERTISE.HTML5:
      return <HTML5Logo />
    case EXPERTISE.JAVASCRIPT:
      return <JavascriptLogo />
    case EXPERTISE.LARAVEL:
      return <LaravelLogo />
    case EXPERTISE.MUI:
      return <MuiLogo />
    case EXPERTISE.MYSQL:
      return <MySqlLogo />
    case EXPERTISE.NEXTJS:
      return <NextJsLogo />
    case EXPERTISE.NODEJS:
      return <NodeJsLogo />
    case EXPERTISE.NUXTJS:
      return <NuxtJsLogo />
    case EXPERTISE.PHP:
      return <PHPLogo />
    case EXPERTISE.PIXABAY:
      return <PixabayLogo />
    case EXPERTISE.REACT:
      return <ReactLogo />
    case EXPERTISE.SASS:
      return <SassLogo />
    case EXPERTISE.SQLITE:
      return <SqliteLogo />
    case EXPERTISE.TAILWINDCSS:
      return <TailwindCssLogo />
    case EXPERTISE.TYPESCRIPT:
      return <TypescriptLogo />
    case EXPERTISE.VERCEL:
      return <VercelLogo />
    case EXPERTISE.VISUAL_STUDIO_CODE:
      return <VSCodeLogo />
    case EXPERTISE.VUEJS:
      return <VuejsLogo />
    case EXPERTISE.VUETIFYJS:
      return <VuetifyjsLogo />
    case EXPERTISE.WORDPRESS:
      return <WordpressLogo />
    default:
      return null
  }
}

type ExpertiseItemProps = {
  icon: string
  height?: string
  width?: string
  padding?: string
}

const ExpertiseItem: FC<ExpertiseItemProps> = ({
  icon,
  height = 'h-24',
  width = 'w-24',
  padding = 'p-4',
}): ReactElement => {
  return (
    <div
      className={`flex ${icon} ${height} ${width} ${padding} bg-dark justify-center items-center hover:bg-primary hover:fill-alternate dark:bg-primary dark:fill-alternate dark:hover:bg-alternate dark:hover:fill-primary transition-all duration-200 rounded`}
    >
      {getIcon(icon)}
    </div>
  )
}

export default ExpertiseItem
