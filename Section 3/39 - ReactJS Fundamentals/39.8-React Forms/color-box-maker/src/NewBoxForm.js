import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import './NewBoxForm.css'

const NewBoxForm = ({addBox}) =>{
    const INITIAL_STATE = {
        color: '',
        width: '',
        height: ''
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
        addBox({ ...formData, id:uuidv4() });
        setFormData(INITIAL_STATE);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          name="color"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="width">Width</label>
        <input
          id="width"
          type="text"
          name="width"
          placeholder="width in pixels"
          value={formData.width}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          name="height"
          placeholder="height in pixels"
          value={formData.height}
          onChange={handleChange}
        />
        <br></br>
        <button>Add Box</button>
      </form>
    );
}

export default NewBoxForm;
