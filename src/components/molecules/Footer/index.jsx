import React from 'react'
import { Text } from '../../atoms'


export const Footer = () => {
  return (
    <footer>
        <div className='fter-txt'>
            <Text type='p'>Sample text. Click to select the text box. Click again or double click to start editing the text.</Text>
            <Text className='sec-fter-txt' type='p'>Website Templates created with Website Builder Software</Text>
        </div>
    </footer>
  )
}


