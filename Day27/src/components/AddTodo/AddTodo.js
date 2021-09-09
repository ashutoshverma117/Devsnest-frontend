import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './AddTodo.css';

const AddTodo = (props) => {
    return (
        <form className="container" onSubmit={(event)=> {
            event.preventDefault();
            let input= event.target.userInput.value;
            props.dispatch(addTodo(input));
            event.target.userInput.value="";
        }}>
            <input type="text" name="userInput" className="input"/>
            <button className="btn-sub">Submit</button>
        </form>
    );
};

export default connect() (AddTodo);
