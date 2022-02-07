import { FC, ReactElement } from 'react'
import { RouteProps } from 'react-router-dom'

type DashboardProps = {
  signUserOut: Function
}

const Dashboard: FC<DashboardProps & RouteProps> = ({
  signUserOut,
}): ReactElement => {
  return <div>Dashboard</div>
}

export default Dashboard
