import React from 'react';

function Header(){
    return(
        <div className="keyboardCat bg-cover bg-center">
            {/* <img className='bg-clip-text z-0 object-cover image-center rounded-full w-20 md:w-32 lg:w-48' src='https://media4.giphy.com/media/Hcw7rjsIsHcmk/giphy.gif' alt='banner-img'/> */}
            
            <h1 className='text-center font-mono tracking-widest  font-black bg-babyBlue mix-blend-soft-light text-5xl'> Meme Generator </h1>
            {/* <h1 className='bg-clip-text z-10 text-center text-cream font-mono font-semibold text-2xl'> Meme Generator </h1> */}
            {/* <img className='rounded-full w-20 md:w-32 lg:w-48' src='https://c.tenor.com/ax90CEft0DsAAAAM/drake-cry.gif' alt='banner-img-2'/> */}
        </div>
    )
}

export default Header;