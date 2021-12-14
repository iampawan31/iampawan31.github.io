import { FC, ReactElement, useRef, useState } from 'react'
import Header from '../components/Header'

const CAPTCHA_KEY = '6LdoT1YdAAAAAHgxNRypYqnZD_MdsGUgAtqJo9_z'

const Contact: FC = (): ReactElement => {
  const formEl = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const data = new FormData(e.currentTarget)
    const response = await fetch(e.currentTarget.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.status === 200) {
      setLoading(false)
      setSuccess(true)
      setStatus("Thank you for contacting. I'll get in touch with you soon!")
      if (formEl && formEl.current) {
        formEl.current.reset()
      }
    } else {
      setLoading(false)
      setSuccess(false)
      setStatus('Oops! There was a problem submitting your form')
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="dark:bg-primary md:dark:bg-alternate md:bg-alternate w-full px-4 py-16 md:p-16">
        <form
          ref={formEl}
          onSubmit={handleSubmit}
          id="contact-form"
          action="https://formspree.io/f/mqknzada"
          method="POST"
        >
          <div className="form-control flex flex-col py-4">
            <label
              htmlFor="name"
              className="text-2xl dark:text-alternate text-primary md:dark:text-primary md:text-primary font-primary"
            >
              Name
            </label>
            <input
              type="text"
              required
              name="name"
              className="text-2xl dark:bg-alternate bg-primary md:dark:bg-primary md:bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label
              htmlFor="email"
              className="text-2xl font-primary dark:text-alternate text-primary md:dark:text-primary md:text-primary"
            >
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              className="text-2xl dark:bg-alternate bg-primary md:dark:bg-primary md:bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label
              htmlFor="phone"
              className="text-2xl font-primary dark:text-alternate text-primary md:dark:text-primary md:text-primary"
            >
              Phone
            </label>
            <input
              type="text"
              required
              name="phone"
              className="text-2xl dark:bg-alternate bg-primary md:dark:bg-primary md:bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label
              htmlFor="message"
              className="text-2xl font-primary dark:text-alternate text-primary md:dark:text-primary md:text-primary"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              className="text-2xl dark:bg-alternate bg-primary md:dark:bg-primary md:bg-primary text-alternate focus:outline-none rounded p-2 shadow-sm"
            ></textarea>
          </div>
          <div className="form-control flex flex-col py-4">
            <div className="g-recaptcha" data-sitekey={CAPTCHA_KEY}></div>
          </div>
          <div>
            <button
              disabled={loading}
              type="submit"
              className="disabled:opacity-50 dark:bg-alternate bg-primary md:dark:bg-primary md:bg-primary dark:text-primary text-alternate md:text-white md:dark:text-white w-full md:w-auto px-4 py-2 font-primary rounded text-2xl"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          {status ? (
            <div
              className={`${
                success ? 'bg-green' : 'bg-red'
              } w-full my-4 rounded py-2 px-2 text-white`}
            >
              {status}
            </div>
          ) : null}
        </form>
      </div>
      <div className="order-first md:order-last">
        <Header title="Contact" color="bg-experience" />
      </div>
    </div>
  )
}

export default Contact
