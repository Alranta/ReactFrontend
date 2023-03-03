import React, { useState} from 'react';
import Todolist from './Todolist';

export default function ShowList(props) {

  const handleDeleteTodo = (row) => {
    props.setTodos(props.todos.filter((todo, index) => row !== index));
  }

    return(
        <div>
        <table>
            <tbody>
            {
            props.todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td><button onClick = {() => handleDeleteTodo(index)}>Done</button></td>
              </tr>)
            }
            </tbody>
      </table>
        </div>
    );
}