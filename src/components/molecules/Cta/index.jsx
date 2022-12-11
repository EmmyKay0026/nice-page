import React from 'react'
import { Text, Button} from '../../atoms'

export const Cta = ({children, childrenp,childrenbtn}) => {
  return (
    <div>
      <Text type='h1' className='h1-txt'>{children}</Text>
      <Text type='p' className='p-txt'>{childrenp}</Text>
      <div className='btn-cont'>
        <Button className='green-btn'>{childrenbtn}</Button>
      </div>
    </div>
  )
}


