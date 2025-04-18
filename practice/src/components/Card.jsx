function Taskcard({ task, handelDelete }) {

    return (
        <>
            <li className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handelDelete(task.id)} className='delete'>Delete</button>
            </li>
        </>
    )
}

export default Taskcard