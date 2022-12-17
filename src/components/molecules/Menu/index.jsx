import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import './app'

// let newMenu;
export const Menu = () => {
  // eslint-disable-next-line
    const hamburger = useSelector((state)=> state.hamburger)
    const dispatch = useDispatch()
    const closeMenu = ()=>{
        dispatch({type:'close'})
    }
    // if(hamburger === true){
    //    newMenu = {}
    //   console.log(newMenu);
    // }else if (hamburger === false){
    //    newMenu  = {
    //     transition: 'background-color 5s',
    //     backgroundColor:'red',
    //     // width: '50vw',
    //   }
    //   console.log(newMenu);
    // }

  return (
    <div className='menu'>
      <div className='left-menu'>
        <div onClick={closeMenu} className='close-btn'></div>
        <ul>
           <li>Home</li> 
        </ul>
      </div>
      <div onClick={closeMenu} className='right-menu'></div>
    </div>
  )
}


