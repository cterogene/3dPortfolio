import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hi, I'm <span className='blue-gradient_text
        font-semibold drop-shadow'>Claudio</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p> Bachelor in Computer Science based in Haiti, Software developer, Entrepreneur.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'> My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (

            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'

                />
              </div>

            </div>


          ))}


        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'> Work Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p> A Software Developer with entry-level experience specializing in user interface design, application development,
            and continuous improvement. 
             Adept at identifying opportunities to enhance the user experience and develop new features to improve app functionality.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About