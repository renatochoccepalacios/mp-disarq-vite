import React from 'react'

const Banner = () => {
    return (
        <section className='grid h-screen w-full text-white'>
            <img src="https://plus.unsplash.com/premium_photo-1679582752958-620b02eab7cc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute top-0 left-0 w-full h-full object-cover " />
            <div className='grid relative z-20  w-full bg-gray-800/50 backdrop-blur-md p-4 '>
                <div className='h-screen  absolute flex  items-center w-full  text-center '>
                    <h1 className='text-4xl flex w-full items-center text-[4rem] max-w-[550px] tracking-[2px] justify-center uppercase font-thin text-center md:justify-start'>Mp disarq
                    </h1>
                </div>
                <span className='absolute bottom-[90px] w-full text-center'>Diseño y Construcciones Un buen diseño consiste en convertir sueños en realidad.</span>
            </div>

        </section>
    )
}

export default Banner