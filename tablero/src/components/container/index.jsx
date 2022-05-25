import './style.css'
import Column from '../column'

function Container () {
    return(
        <>
            <input type="text"  placeholder='Filter Card'/>

            <main className='main__container'>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            </main>
           

        </>
    )
}

export default Container