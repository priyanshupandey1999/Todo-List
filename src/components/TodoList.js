import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text))
 {
     return
 } 

        const newTodos = [todo, ...todos];

        setTodos(newTodos);

};

const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
};

const updateTodo = (todoId , newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text))
    {
        return
    } 

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )));
};

const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
}

    return (
        <div>
            <h1>What's the Plan for today ?</h1> 
            <h2>Currently its just frontend so on refresh it will disappear.</h2>
            <h2>Soon Backend will also be attached!!</h2>
            <h3>Click on text to mark it finish</h3>
            <TodoForm onSubmit = {addTodo} /> 
            <Todo 
            todos = {todos}
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}
            />
        </div>
    )
}

export default TodoList
