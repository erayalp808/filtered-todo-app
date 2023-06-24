import React, {useState, useEffect} from 'react'

function FilterBar({setFilteredTodos, todos}) {
    
    const [filterText, setFilterText] = useState("");

    const filterTodos = () => {
        let filteredTodos = todos.filter((todo) => {
            return todo.task
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
          })
        setFilteredTodos(filteredTodos)
    }

    useEffect(filterTodos, [filterText, todos])

  return (
    <div>
        <input 
      placeholder='Filter tasks'
      className='todo-input filter' 
      value={filterText} 
      onChange={(e) => setFilterText(e.target.value)}/>
    </div>
  )
}

export default FilterBar