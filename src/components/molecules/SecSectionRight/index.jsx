import React from 'react'
import { Text, Button } from '../../atoms'

export const SecSectionRight = () => {
  return (
    <div className='right-sec'>
      <div>
        <div className='blurb-bg'>
            <div className='justify-cen' ><div className='blurb-icon'><Text> padlock</Text></div></div>
            <Button className='blurb-btn'>Free</Button>
            <div>
              <Text type='h3'>SSL Certificate</Text>
              <Text type='p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
              <Button className='underline-btn'>More</Button>
            </div>
        </div>
        <div className='blurb-bg'>
          <div className='justify-cen' ><div className='blurb-icon'><Text> tag</Text></div></div>
            <div>
              <Text type='h3'>Code Editor</Text>
              <Text className='pad-0' type='p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
              <Button className='underline-btn'>More</Button>
            </div>
        </div>
      </div>
      <div>
        <div className='blurb-bg'>
          <div className='justify-cen' ><div className='blurb-icon'><Text> web</Text></div></div>
              <div>
                <Text type='h3'>Personal Domain</Text>
                <Text type='p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
                <Button className='underline-btn'>More</Button>
              </div>
        </div>
        <div className='blurb-bg'>
          <div className='justify-cen' ><div className='blurb-icon'><Text> store</Text></div></div>
            <Button className='blurb-btn'>Free</Button>
              <div>
                <Text type='h3'>Media Storage</Text>
                <Text type='p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
                <Button className='underline-btn'>More</Button>
              </div>
        </div>
      </div>
    </div>
  )
}


