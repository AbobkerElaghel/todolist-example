import React from 'react';
import '../style/App.css';
import PropTypes from 'prop-types';
import AddToDo from "./AddTodo";
import ToDoList from "./TodosList";

class ToDoListApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      toDosList: [] // array of Strings
    }
  }

    addItem = event => {
      event.preventDefault();
      const str = event.target.elements.inputField.value;
      if(!this.state.toDosList.includes(str) && str){
        this.setState(() => {
          return {
            toDosList: this.state.toDosList.concat(str)
          }
        });
      }else{
        alert("options exists already or empty");
      }
      event.target.elements.inputField.value = "";
    };

    deleteItem = Item => {
      this.setState(() => {
        return {
          toDosList: this.state.toDosList.filter(item => item !== Item)
        }
      })
    };

    deleteAllItem = () => {
      this.setState(() => {
        return {
          toDosList: []
        }
      })
    };

    
  render() {
    return (
        <div className="App">
          <AddToDo addItem={this.addItem}/>
          <ToDoList toDosList={this.state.toDosList} deleteItem={this.deleteItem}/>
          <button onClick={this.deleteAllItem}>Delete All</button>
        </div>
    );
  }
}

ToDoListApp.propTypes = {
  toDosList: PropTypes.array
};

export default ToDoListApp;