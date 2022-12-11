import React from 'react'
import { Image } from '../../atoms'
import { HeroLeftHalf } from '../../molecules'
import heroImage from '../../../assets/images/xcc-min.png'

export const HeroSection = () => {
  return (
    <section className='hero-section'>
      <HeroLeftHalf />
      <div className='hero-img-cont'>
      <Image src={heroImage} />
      </div>
    </section>
  )
}


