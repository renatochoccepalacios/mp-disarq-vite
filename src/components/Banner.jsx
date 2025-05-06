import React from 'react'

const Banner = () => {
    return (
        <section className='grid min-h-dvh w-full text-white'>
            <img src="https://plus.unsplash.com/premium_photo-1679582752958-620b02eab7cc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute top-0 left-0 w-full h-full object-cover " />
            <div className=' z-20 flex justify-center  w-full bg-gray-20/50 backdrop-blur-sm p-4 banner'>
                <div className='max-w-[1260px]  grid m-auto gap-[2rem] grid-cols-1 md:grid-cols-2 relative '>
                    <div className=' flex items-center justify-center w-full py-[2rem]  text-center '>
                        <h1 className='text-4xl z-10 flex flex-col items-center text-[4rem] tracking-[0.25rem] uppercase font-thin text-center '>Mp disarq
                            <span className='tracking-[3px] text-[14px]'>Diseño y Construcciones</span>
                        </h1>

                    </div>

                    <div className=' grid grid-cols-3 gap-[2rem] md:gap-4 items-center justify-center w-full  z-20'>
                        <figure className=''>
                            <img src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWRpZmljaW9zfGVufDB8fDB8fHww" className='object-cover w-[500px] min-h-[300px] md:min-h-[400px]' alt="" />
                        </figure>
                        <figure className=' '>
                            <img src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWRpZmljaW9zfGVufDB8fDB8fHww" className='object-cover w-[500px] min-h-[300px] md:min-h-[400px]' alt="" />
                        </figure>
                        <figure className=''>
                            <img src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWRpZmljaW9zfGVufDB8fDB8fHww" className='object-cover w-[500px] min-h-[300px] md:min-h-[400px]' alt="" />
                        </figure>

                    </div>
                    {/* <span className='absolute bottom-[90px] z-10 w-full text-center px-[2rem] text-[.80rem]'>Diseño y Construcciones Un buen diseño consiste en convertir sueños en realidad.</span> */}
                </div>


            </div>

        </section>
    )
}

export default Banner