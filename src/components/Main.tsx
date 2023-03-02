import React, { Component } from "react";
import "./Main.css";
import Form from "./Form"
import Tasks from "./Tasks"

class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1
  }

  componentDidMount(): void {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.setState({tasks: JSON.parse(tasks)});
    }
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {

    if (this.state.tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (this.state.tasks.indexOf(this.state.newTask.trim()) !== -1) return;


    if(this.state.index === -1){
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask.trim()],
        newTask: '',
      });
    }else {
      const newTasks = [...this.state.tasks];
      newTasks[this.state.index] = this.state.newTask;

      this.setState({
        tasks: [...newTasks],
        newTask: '',
        index: -1,
      });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({newTask: e.target.value});
  }

  handleEdit = (e: React.ChangeEvent<HTMLInputElement>, index ) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index]
    })
  }

  handleDelete = (e: React.ChangeEvent<HTMLInputElement>, index) => {
    const { tasks } = this.state;
    const newTask = [...tasks];
    newTask.splice(index, 1);
    this.setState({tasks: [...newTask]});
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task List</h1>
        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        newTask={newTask}
        />

        <Tasks
        tasks={tasks}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default Main;
