import React from 'react'
import { Text, Button } from '../../atoms'

export const SecSectionRight = () => {
  return (
    <div>
      <div>
        <div>
            <div className='blurb-icon'><Text > padlock</Text></div>
            <Button>Free</Button>
            <div>
              <Text type='h3'>SSL Certificate</Text>
              <Text type='p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
              <Button className='underline-btn'>More</Button>
            </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}


