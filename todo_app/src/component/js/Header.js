import React from 'react';
import '../css/Header.css'

function Header(props) {
  return (
    <>
      <div className='row'>
        <div className='container-sm rounded-4 bg-dark text-white pb-5 pt-5 my-5 custom-header'>
          <h1 className='display-3 custom-title'>Your Tasks</h1>
          <p className='display-6 text-white-50'>
            Have completed {props.completed + " "}
            of {props.total}</p>
        </div>
      </div>
    </>
  );
}

export { Header };