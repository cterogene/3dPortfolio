import React from 'react'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'> Have a project in mind ?
         <br className='sm:block hidden'/> 
         We can work together ! </p>
         <Link to='/contact' className='btn'> Let's Chat </Link>
    </section>
  )
}

export default CTA