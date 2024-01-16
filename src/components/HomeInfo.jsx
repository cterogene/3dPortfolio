import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm: text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm: leading-snug text-center
            neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, My name is <span className='font-semibold'>Claudio 🫡</span>  <br />
            A Software Developer and Entrepreneur from Haiti</h1>
            ),

    2: (
        <InfoBox
            text="Passionate worker and tech lover "
            link="/about"
            btnText="More about" 
            />
    ),
    3: (<InfoBox
        text="Worked on 10+ project, personal and business "
        link="/project"
        btnText="View project" />
        ),
    4: (<InfoBox
        text="Ready to have a new adventure ? "
        link="/contact"
        btnText="Let's  chat " />
        ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo