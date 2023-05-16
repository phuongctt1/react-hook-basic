import { useState } from "react";
import React from "react";
const TodoList = () => {
    const [name, setName] = useState("")
    return(
        <div>
            <label>Name</label>
            <input value={name} type = "text"
            onChange= {(event) => {
                console.log("check event: ", event)
                setName(event.target.value)
                } } />
            <br/><br/>
            Hello study with me {name}
        </div>
    );
}

export default TodoList;
