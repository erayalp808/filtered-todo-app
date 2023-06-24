import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import FilterBar from './FilterBar';

uuidv4();

function TodoWrapper() {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, 
        {
            id: uuidv4(), 
            task: todo, 
            completed: false, 
            isEditing: false
        }]);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => 
            (todo.id === id) ? 
            {...todo, completed: !todo.completed} : todo
        ))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => 
            todo.id !== id
        ))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => 
            (todo.id === id) ?
            {...todo, isEditing: !todo.isEditing} : todo
        ))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => 
            (todo.id === id) ?
            {...todo, task: task, isEditing: !todo.isEditing} : todo
        ))
    }
    
  return (
    <div className='TodoWrapper'>
        <h1>Let's Plan All Out!</h1>
        <TodoForm addTodo={addTodo}/>
        <FilterBar 
        setFilteredTodos={setFilteredTodos} 
        todos={todos}/>
        {filteredTodos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm 
                editTask={editTask} 
                todo={todo}/>
            ) : (
                <Todo 
                todo={todo} 
                key={index} 
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                />
            )
        ))}
    </div>
  )
}

export default TodoWrapper