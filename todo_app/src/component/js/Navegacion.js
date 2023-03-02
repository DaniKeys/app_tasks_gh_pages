import React from 'react';
import '../css/Navegacion.css'

function Navegacion({ setSearch , porcentaje}) {

    const onSearchValueChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='container rounded-4 bg-dark text-white pb-4 pt-5 custom-center'>
                        <h3 className='display-6 custom-title pb-5'>Search tasks</h3>
                        <input className="form-control mx-auto"
                            placeholder="Find Task"
                            onChange={onSearchValueChange} />
                        <div className='progress my-5 mx-auto charge'>
                        <div className="progress-bar bg-info progress-bar-striped color" style={{ width:`${porcentaje}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export { Navegacion };