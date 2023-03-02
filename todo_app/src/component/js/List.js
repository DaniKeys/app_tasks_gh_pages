import React from 'react';
import '../css/List.css'
import { GoX,GoIssueOpened,GoChecklist} from "react-icons/go";
import { ImCheckmark} from "react-icons/im";


function List(props) {

    return (
        <>
            <div className='col-12'>
                <div className='container rounded-4 bg-dark text-white my-5 pb-4 pt-5 list-custom'>
                    <h3 className='display-6 custom-title pb-4'>List Tasks</h3>
                    <div>
                        <ul>
                            {
                                props.tarea.length > 0 ?
                                    props.tarea.map(tarea => (
                                        <li key={tarea.text} className='row mx-auto'>
                                            <div className='col-3'>
                                                <button className='chulo' onClick={() => { props.completed(tarea.text) }}>{tarea.completed ? <span><ImCheckmark/></span> : <span><GoIssueOpened/></span>}</button>
                                            </div>
                                            <div className='col-6'>
                                                {/* <p className={`TodoItem-p ${tarea.completed && 'TodoItem-p--complete'}`}> */}
                                                <p className={tarea.completed ? "TodoItem-p--complete" : "TodoItem-p"}>
                                                    {tarea.text}
                                                </p>
                                            </div>
                                            <div className='col-3'>
                                                <button className='remove-btn' onClick={() => { props.remove(tarea.text) }}><GoX/></button>
                                            </div>
                                        </li>
                                    )) : (
                                        <h2 className='centerIconList'>Ok <GoChecklist/></h2>
                                    )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export {List};