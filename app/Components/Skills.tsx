import React from 'react'
import Image from 'next/image'
import HTML from '../../public/images/Html 5.svg'
import CSS from '../../public/images/CSS3.svg'
import Figma from '../../public/images/Figma.svg'
import Speaker from '../../public/images/Speaker.svg'
import Analytics from '../../public/images/Google Analytics.svg'

const Skills = () => {
  return (
    <div className='flex justify-evenly'>
      <Image src={HTML} alt="HTML logo" />
      <Image src={CSS} alt="CSS logo" />
      <Image src={Figma} alt="Figma logo" className="bounce-animation" />
      <Image src={Speaker} alt="Speaker logo" />
      <Image src={Analytics} alt="Analytics logo" />
    </div>
  )
}

export default Skills
