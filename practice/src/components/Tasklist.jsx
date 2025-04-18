import { useState } from "react"
import Taskcard from "./Card"

function Tasklist() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Record Task", completed: true },
        { id: 2, name: "Edit and review task", completed: false },
        { id: 3, name: "uploaded record", completed: false }
    ])

    const [show, setShow] = useState(true)


    function handelDelete(id) {
        setTasks(tasks.filter(task => id !== task.id))
    }

    return (
        <>
            <h1>Task List</h1>
            <ul>
                <button onClick={() => setShow(!show)} className="trigger">Toggle</button>
                {show && tasks.map((task) => (
                    <Taskcard key={task.id} task={task} handelDelete={handelDelete} />
                ))}
            </ul>
        </>
    )
}

export default Tasklist