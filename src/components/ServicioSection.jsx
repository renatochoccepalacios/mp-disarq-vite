import React from 'react'
import prueba1 from '../assets/prueba1.jpg'

export const ServicioSection = () => {
    return (
        <section className=' relative'>

            <div className=' py-6 z-10 px-[1.1rem] max-w-[800px] m-auto flex'>
                <article  className='bg-white'>
                    <img src={prueba1} alt="" />
                    <div className='min-h[400px] py-[2rem] px-[1.1rem]'>
                        <h4>Dizse</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, aut, quo assumenda tenetur obcaecati facilis ea saepe, modi non impedit eos quod ad. Mollitia inventore laborum, nihil quidem tenetur neque!</p>
                    </div>
                </article>
                

            </div>
            <div className='h-[200px] z-[-5]  bg-secundario absolute top-0 w-full'></div>

        </section>)
}
