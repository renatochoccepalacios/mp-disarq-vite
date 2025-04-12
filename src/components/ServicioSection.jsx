import React from 'react'
import prueba1 from '../assets/prueba1.jpg'

export const ServicioSection = () => {
    return (
        <section className=' relative'>

            <div className=' py-6 z-10 px-[1.1rem] max-w-[1260px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
                <article className='bg-white max-w-[240px] shadow-[0px_11px_10px_rgba(0,0,0,0.2)] rounded-[1rem] flex flex-col  w-full h-[400px]'>
                    <img src={prueba1} alt="" />
                    <div className=' py-[2rem] px-[1.1rem]  flex gap-[2rem] flex-col justify-between'>
                        <div>
                            <h4>Diseño arquitectónico</h4>
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
