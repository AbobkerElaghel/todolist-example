import React from 'react';

const AddToDo = props => (
    <div>
        <form onSubmit={props.addItem}>
            <input type="text" name="inputField"/>
            <button type="submit">Add</button>
        </form>
    </div>
);

export default AddToDo;