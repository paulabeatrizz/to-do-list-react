import { useState } from 'react';
import './App.css';
import { Task } from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]); 
    setNewTask("");
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id){
        return {...task, completed: true};
      }else{
        return task;
      }
    }))
  } 
  return (
    <div className="App container mt-5">
      <h1 className="display-4 fw-bold text-center mb-4">To do list!</h1>
      <div className='addTask d-flex gap-2 mb-4'>
        <Form.Control
          type='text'
          placeholder='Add a new task'
          value={newTask}
          onChange={handleChange}
        />
        <Button variant="primary" size='sm' onClick={addTask} >Add Task</Button>
        
      </div>
      <div className='list list-group'>
        {todoList.map((task) => {
        return (
          <div key={task.id} className='list-group-item'>
            <Task taskName={task.taskName} id={task.id} completed={task.completed} 
            deleteTask={deleteTask} completeTask={completeTask}/>
          </div>
        );
        })}
      </div>
    </div>
  );
}

export default App;
