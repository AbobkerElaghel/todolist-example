import React from 'react';
import ToDo from "./Todo";

const ToDoList = props => (
    <ul>
        {props.toDosList.map((toDo, index) => <ToDo key={index} item={toDo} deleteItem={props.deleteItem}/>)}
    </ul>
);

export default ToDoList;