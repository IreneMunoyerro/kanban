import './style.css'
import Task from '../task'
import {AiOutlinePlus } from 'react-icons/ai';

function Column () {
    return(
        <>
            <div className='column__container'>

                <section className='header__column'>

                    <article className='counter-title'>
                     <div className='counter'></div>
                     <span>TITULO</span>
                    </article>
                    

                    <span><AiOutlinePlus></AiOutlinePlus></span>
                </section>

            <Task></Task>
            </div>
        </>
    )
}

export default Column