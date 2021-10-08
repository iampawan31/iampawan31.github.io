import { FC, ReactElement } from 'react'
import Header from '../components/Header'

const Contact: FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-alternate w-full px-4 py-16 md:p-16">
        <form action="">
          <div className="form-control flex flex-col py-4">
            <label htmlFor="name" className="text-2xl font-primary">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="text-2xl bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="email" className="text-2xl font-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="text-2xl bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="message" className="text-2xl font-primary">
              Message
            </label>
            <textarea
              name="message"
              className="text-2xl bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            ></textarea>
          </div>
          <div>
            <button className="bg-primary text-alternate w-full md:w-auto px-4 py-2 font-primary rounded text-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="order-first md:order-last">
        <Header title="Contact" color="bg-experience" />
      </div>
    </div>
  )
}

export default Contact
