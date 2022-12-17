import store from '../../../store/index'

const hamburger =store.getState().hamburger


// const getMenu = async ()=>{
    //     let men = await menu.classList
    // }
    
    // setTimeout(() => {
    if (hamburger === true ) {
        const body = document.getElementsByTagName('body')
        console.log(body[0]);
        body[0].classList.add('new-body');
        console.log(body[0]);
    }else if (hamburger === false ){
        const body = document.getElementsByTagName('body')
        console.log(body[0]);
        body[0].classList.remove('new-body');
        console.log(body[0])
    }
    // if (hamburger === false ) {
    //     menu.classList.remove('new-menu');
    // }
    
// }, 10000); 