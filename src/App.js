import React, { useState, useCallback, useEffect } from "react";
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import Login from './components/Login';
import TopBar from './components/TopBar';
import { getTodos, addTodo, updateTodo, deleteTodo } from './services/Service';
import './App.css';

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (update) {
      getTodos(localStorage.getItem('userId')).then((res) => setTodoItems(res.data));
    }
    setUpdate(false);
  }, [update]);

  const handleAddToDo = useCallback(item => {
    const items = [
      {
        id: item.id,
        content: item.content,
        complete: item.complete
      },
      ...todoItems,
    ]
    setTodoItems(items);
    addTodo(items)
    setUpdate(true);
  }, [todoItems]);
  
  const handleOnLoginUser = useCallback(user => {
    localStorage.setItem('username', user.username);
    localStorage.setItem('userId', user.userId);
    setLoggedIn(true);
  }, [loggedIn]);


  const handleOnLogOff = useCallback(remove => {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setLoggedIn(false);
  }, [loggedIn]);

  const handleOnDelete = useCallback(id => {
    const newTodoItems = todoItems.filter(item => item.id !== id)
    setTodoItems(newTodoItems)
    deleteTodo(newTodoItems)
  }, [todoItems]);
  
  const handleOnToggleComplete = useCallback(id => {
    const item = todoItems.find(item => item.id === id)
    item.complete = !item.complete
    setTodoItems([...todoItems])
    updateTodo('item', todoItems)
  
  }, [todoItems]);

  if (loggedIn) {
    return (
      <div>
        {localStorage.getItem('userId')}
        <TopBar username={localStorage.getItem('username')}  onLogOff={handleOnLogOff} />
        <AddToDoForm onAddToDo={handleAddToDo} />
        <ToDoList 
          toDoItems={todoItems}
          onDeleteToDo={handleOnDelete} 
          onToggle={handleOnToggleComplete} />
      </div>
    );
  } else {
    return (
      <div>
        <Login onLoginUser={handleOnLoginUser} />
      </div>
    ); 
  }
}

export default App;