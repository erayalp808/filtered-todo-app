import React, {useState} from 'react'

function EditTodoForm({editTask, todo}) {
    const [value, setValue] = useState(todo.task);

    const handleSubmit = e => {
        // prevent default action
        e.preventDefault();
        if (value) {
          // edit todo
          editTask(value, todo.id);
          // clear form after submission
          setValue('');
        }
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input' 
        placeholder='Update task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />

        <button 
        type='submit' 
        className='todo-btn'
        >Update</button>
    </form>
  )
}

export default EditTodoForm