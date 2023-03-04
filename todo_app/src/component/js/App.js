import React from 'react';
import '../css/App.css';
import { Header } from './Header';
import { Navegacion } from './Navegacion';
import { Boton } from './Boton';
import { List } from './List'
import {FaPlus} from "react-icons/fa";


function App(props) {

  const [todos, setTodos] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const addTodo = (tarea) => {
    let addTask = [...todos]
    addTask.push(tarea)
    setTodos(addTask)
  }

  const removeTasks = (text) => {
    setTodos(todos.filter(items => items.text !== text));
  }


  const completedTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

  let searchedTodos = []

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  let completados = todos.filter(todo => todo.completed === true).length
  let porcentaje = 100 * todos.filter(todo => todo.completed === true).length / todos.length;


  return (
    <>
      <Header completed={completados} total={todos.length} />
      {
        modal === true ?
          <Boton className="botonApp" 
          newTodo={(tarea) => addTodo(tarea)} 
          modal={(close) => setModal(close)}
          /> :
          <Navegacion
            setSearch={setSearchValue}
            porcentaje={porcentaje} />
      }
      <List
        tarea={searchedTodos}
        remove={(text) => removeTasks(text)}
        completed={(text) => completedTodo(text)}
      />
      <button className="form-control bg-dark my-1 addTodo" onClick={() => setModal(true)}><FaPlus/></button>
    </>

  );
}
export default App;

