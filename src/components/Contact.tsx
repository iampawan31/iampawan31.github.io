import { FC, ReactElement } from 'react'
import Header from './Header'

const Contact: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="bg-alternate shadow-sm px-4 py-10">
        <Header title="CONTACT" />
        <form action="">
          <div className="form-control flex flex-col py-4">
            <label htmlFor="name" className="text-2xl font-primary">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="text-2xl bg-primary text-alternate dark:bg-alternate dark:text-primary focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="email" className="text-2xl font-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="text-2xl bg-primary text-alternate dark:bg-alternate dark:text-primary focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="message" className="text-2xl font-primary">
              Message
            </label>
            <textarea
              name="message"
              className="text-2xl bg-primary text-alternate dark:bg-alternate dark:text-primary focus:outline-none rounded p-2 shadow-sm"
            ></textarea>
          </div>
          <div>
            <button className="bg-primary text-alternate dark:bg-alternate dark:text-primary px-4 py-2 font-primary rounded text-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
