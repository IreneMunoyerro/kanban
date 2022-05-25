import './style.css'

function Task () {
    return(
        <>
        <div className='task__container'>
            <section className='task-title'>
                <div>S</div>
                <p>TITLE</p>
                <span>I</span>
            </section>
            <section className='task-creation'>
             <p>#id create on DATE HORA</p>
            </section>
        </div>
        </>
    )
}

export default Task