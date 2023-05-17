import { useState } from "react";
import React from "react";

const TodoList = () => {
    const [name, setName] = useState("");
    const [listTodo, setListTodo] = useState(
        
    [
       { id: 'todo1', name: "whatching youtube"},
       { id: 'todo2', name: "using facebook"},
       { id: 'todo3', name: "Reading book"},
    ]
    )
    console.log('>>>> check data:', listTodo)

    const handleClickButton = (event,msg) => {
        console.log(">>run inside handleClickButton---:", name )
    
    };
    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    return(
        <div>
            <label>Name</label>
           
            <input value={name} type="text" onChange={handleInputChange} />
            <button type='button' onClick={ (event) => handleClickButton(event,'buttonClick')}> Submit</button>
            <br/><br/>
            Hello study with me {name}
        </div>
    );
}

export default TodoList;
