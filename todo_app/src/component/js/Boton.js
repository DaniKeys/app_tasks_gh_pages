import React from 'react';
import { useState } from 'react';
import '../css/Boton.css'
import { GoX} from "react-icons/go";

function Boton(props) {

    const [tarea, setTarea] = useState({
        text: "",
        completed: false,
    });

    const addTodo = () => {
        props.newTodo(tarea)
        props.modal(false)
    }


    const handleOnChange = (event) => {
        let nameField = event.target.name;
        let valueField = event.target.value;

        setTarea(
             {
            ...tarea,
            [nameField]: valueField

        });
    };


    return (
        <>
            <div className='row'>
                <div className='col-12 '>
                    <div className='container'>
                    <button className='remove-btn custom-close-button mx-4 my-1' onClick={() => {props.modal(false)}}><GoX/></button>
                        <div className='button-add bg-dark mx-auto rounded-4 pt-5  custom_add'>
                             <h3 className='display-6 custom-title pb-4'>Add Task</h3>
                                <input type="text" className="form-control my-2 mx-auto" placeholder='Input Task' onChange={handleOnChange} value={tarea.text} name="text" required />
                         <button onClick={addTodo} className="btn btn-info my-3">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Boton };