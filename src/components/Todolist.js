import { useState } from "react";
import React from "react";
const TodoList = () => {
    const [name, setName] = useState("")
    return(
        <div>
            <label>Name</label>
            <input type="text" onChange={(event)=> setName(event.target.value)}/>
            <br/><br/>
            Hello study with me {name}
        </div>
    );
}

export default TodoList;
