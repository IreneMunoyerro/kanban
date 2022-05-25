import './style.css'
import Column from '../column'
import { AiOutlineSearch } from 'react-icons/ai';



function Container () {

    const date = new Date();
    const [month, day] = [date.getMonth(), date.getDate()];

    console.log(month)

    // Date.prototype.toDateString()

    return(
        <>
        <section className='input-date__container'>
        <article>
            <p>Version 1.0</p>
            <p>UPDATE ON {day} {month}</p>
        </article>
        <input className='task-selector' type="text"  placeholder={<AiOutlineSearch></AiOutlineSearch>}/>
        </section>
          

            <main className='main__container'>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            </main>
           

        </>
    )
}

export default Container