import React from 'react';

const ToDo = props => (
    <div>
        <span>{props.item}</span> <button onClick={() => props.deleteItem(props.item)}>Delete</button>
    </div>
);

export default ToDo;