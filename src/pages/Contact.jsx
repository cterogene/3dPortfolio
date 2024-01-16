import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleChange = () => { };
  const handleFocus = () => { };
  const handleBlur = () => { };

  return (
    <section className='relative flex lg:flex-row flex-col'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text mt-14'> Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold ' >
            Name
            <input
              type="text"
              name="name"
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label  className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label  className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name="message"
              rows={4}
              className='textarea'
              placeholder='How can I assist'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button 
            type='submit'
            className='btn'
              onFocus={handleFocus}
              onBlur={handleBlur} >
                Submit

          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact