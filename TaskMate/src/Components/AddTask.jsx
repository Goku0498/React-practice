function AddTask({ tasklist, setTasklist }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date()
    const newTask = {
      id: date.getTime(), 
      name: e.target.task.value, 
      time: `${date.toLocaleTimeString} ${date.toLocaleDateString}`
    }
    setTasklist([...tasklist, newTask])
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default AddTask