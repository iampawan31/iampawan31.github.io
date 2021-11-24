import React, { FC, ReactElement } from 'react'
import Header from '../components/Header'

const CAPTCHA_KEY = '6LdoT1YdAAAAAHgxNRypYqnZD_MdsGUgAtqJo9_z'

const Contact: FC = (): ReactElement => {
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget.value)

    await fetch(e.currentTarget.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log(res, 19)
      })
      .catch((err) => {
        console.log(err, 23)
      })
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-alternate w-full px-4 py-16 md:p-16">
        <form
          action="https://formspree.io/f/mqknzada"
          onSubmit={submitForm}
          method="POST"
        >
          <div className="form-control flex flex-col py-4">
            <label htmlFor="name" className="text-2xl font-primary">
              Name
            </label>
            <input
              type="text"
              required
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
              required
              name="email"
              className="text-2xl bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="phone" className="text-2xl font-primary">
              Phone
            </label>
            <input
              type="text"
              required
              name="phone"
              className="text-2xl bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="message" className="text-2xl font-primary">
              Message
            </label>
            <textarea
              name="message"
              required
              className="text-2xl bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            ></textarea>
          </div>
          <div className="form-control flex flex-col py-4">
            <div className="g-recaptcha" data-sitekey={CAPTCHA_KEY}></div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-alternate w-full md:w-auto px-4 py-2 font-primary rounded text-2xl"
            >
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
