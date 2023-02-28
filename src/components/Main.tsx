import React, { Component } from "react";
import "./Main.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Fazer Café',
      'Estudar React',
      'Beber Água'
    ]
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({newTask: e.target.value});
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task List</h1>

        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" value={newTask}/>
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tasks.map(task => (
            <li key={task}>
              {task}
              <div>
              <FaEdit className="edit"/>
              <FaWindowClose className="delete"/>
              </div>
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
