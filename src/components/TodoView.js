import React from "react";
import { stringify } from "uuid";
import "./TodoView.css";

const TodoView = ({todoList}) => {
    

    return (
        <ul style={{listStyle: "none"}}>
            
            {todoList.map(({id, todo}) => {
                return (
                    <li key={id} style={{margin: 20}}>
                        {todo}{" "}
                        
                    </li>
                )
            })}
        </ul>
    )
};



export default TodoView;