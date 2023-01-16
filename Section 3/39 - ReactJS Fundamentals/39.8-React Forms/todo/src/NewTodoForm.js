import {React, useState} from "react";
import {v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

const NewTodoForm = ({addTodo}) => {

    const INITIAL_STATE = {
        todo: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo({ ...formData, id: uuidv4() });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo:</label>
            <input
                id="todo"
                type="text"
                name="todo"
                placeholder="New Todo"
                value={formData.todo}
                onChange={handleChange}
            ></input>
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;
