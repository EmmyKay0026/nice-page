import React from 'react'
import { Text, Button} from '../../atoms'

export const Cta = ({children, childrenp1,childrenp2,childrenbtn}) => {
  return (
    <div>
      <Text type='h2' className='cta-h2-txt'>{children}</Text>
      <Text type='p' className='cta-p1-txt'>{childrenp1}</Text>
      <Text type='p' className='cta-p2-txt'>{childrenp2}</Text>
      <div className='btn-cont'>
        <Button className='green-btn'>{childrenbtn}</Button>
      </div>
    </div>
  )
}


