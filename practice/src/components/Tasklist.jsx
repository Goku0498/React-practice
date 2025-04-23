import { useState } from "react"
import Taskcard from "./Card"
import Boxcard from "./BoxCard"

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
            <Boxcard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, a. Ipsam ducimus fugiat facilis beatae.</p>
            </Boxcard>
            
            <div className="box warning">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, a. Ipsam ducimus fugiat facilis beatae.</p>
            </div>
            <div className="box alert">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, a. Ipsam ducimus fugiat facilis beatae.</p>
            </div>
        </>
    )
}
export default Tasklist