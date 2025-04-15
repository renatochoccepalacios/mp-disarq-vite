import React from 'react'
import prueba1 from '../assets/prueba1.jpg'

export const ServicioSection = () => {
    return (
        <section className=' relative grid place-content-center min-h-[100dvh]'>

            <div className=' py-[5rem] z-10 px-[1.1rem] max-w-[1260px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] justify-center align-center'>
                <article className='bg-white  shadow-[0px_11px_10px_rgba(0,0,0,0.2)] rounded-[1rem] flex flex-col  w-full min-h-[400px]'>
                    <img src={prueba1} alt="" className='rounded-[1rem] rounded-b-none ' />
                    <div className=' py-[2rem] px-[1.1rem]  flex gap-[2rem] flex-col justify-between'>
                        <div>
                            <h3 className='font-bold text-[1.2rem]'>Diseño arquitectónico</h3>
                            <p>Nos especializamos en la personalización de proyectos, diseñando cada detalle.

</p>
                        </div>
                        <a href="" className='p-[0.55rem] w-[100px] text-center bg-black text-white'>Ver Mas</a>
                    </div>
                </article>
                <article className='bg-white  shadow-[0px_11px_10px_rgba(0,0,0,0.2)] rounded-[1rem] flex flex-col  w-full min-h-[400px]'>
                    <img src={prueba1} alt="" className='rounded-[1rem] rounded-b-none ' />
                    <div className=' py-[2rem] px-[1.1rem]  flex gap-[2rem] flex-col justify-between'>
                        <div>
                            <h3 className='font-bold text-[1.2rem]'>Diseño arquitectónico</h3>
                            <p>Nos especializamos en la personalización de proyectos, diseñando cada detalle.

</p>
                        </div>
                        <a href="" className='p-[0.55rem] w-[100px] text-center bg-black text-white'>Ver Mas</a>
                    </div>
                </article>
                <article className='bg-white  shadow-[0px_11px_10px_rgba(0,0,0,0.2)] rounded-[1rem] flex flex-col  w-full min-h-[400px]'>
                    <img src={prueba1} alt="" className='rounded-[1rem] rounded-b-none ' />
                    <div className=' py-[2rem] px-[1.1rem]  flex gap-[2rem] flex-col justify-between'>
                        <div>
                            <h3 className='font-bold text-[1.2rem]'>Diseño arquitectónico</h3>
                            <p>Nos especializamos en la personalización de proyectos, diseñando cada detalle.

</p>
                        </div>
                        <a href="" className='p-[0.55rem] w-[100px] text-center bg-black text-white'>Ver Mas</a>
                    </div>
                </article>

                <article className='bg-white  shadow-[0px_11px_10px_rgba(0,0,0,0.2)] rounded-[1rem] flex flex-col  w-full min-h-[400px]'>
                    <img src={prueba1} alt="" className='rounded-[1rem] rounded-b-none ' />
                    <div className=' py-[2rem] px-[1.1rem]  flex gap-[2rem] flex-col justify-between'>
                        <div>
                            <h3 className='font-bold text-[1.2rem]'>Diseño arquitectónico</h3>
                            <p>Nos especializamos en la personalización de proyectos, diseñando cada detalle.

</p>
                        </div>
                        <a href="" className='p-[0.55rem] w-[100px] text-center bg-black text-white'>Ver Mas</a>
                    </div>
                </article>

            </div>
            <div className='h-[200px] z-[-5]  bg-secundario absolute top-0 w-full'></div>

        </section>)
}
