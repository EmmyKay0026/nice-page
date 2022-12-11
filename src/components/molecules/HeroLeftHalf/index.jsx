import React from 'react'
import { Button, Text } from '../../atoms'



export const HeroLeftHalf = () => {
  return (
    <div>
      <Text type='h1' className='hero-h1-txt'>One-click solution for your static website.</Text>
      <Text type='p' className='hero-p-txt'>Image from  Freepik.</Text>
      <div className='btn-cont'>
        <Button className='green-btn'> Upload for Free</Button>
        <Button className='ash-btn'> Watch Video</Button>
      </div>
    </div>
  )
}


