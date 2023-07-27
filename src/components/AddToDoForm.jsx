import React, { useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ItemInput, AddButton, FormArea, Form } from '../util/Style';

const AddToDoButton = ({ onAddToDo }) => {
   
    const [ inputValue, setInputValue ] = useState("");

    const addToDoItem = e => {
        e.preventDefault();
    
        const item = {
            id: uuidv4(),
            content: inputValue,
            complete: false
        }
        
        onAddToDo(item)
        setInputValue("");
    };

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    };

    return (
        <FormArea>
            <Form onSubmit={addToDoItem}> 
                <ItemInput 
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="Enter Task" />
                <AddButton type="submit">Add</AddButton>
            </Form>
        </FormArea>
    );
}

AddToDoButton.propTypes = {
    onAddToDo: PropTypes.func.isRequired,
}

export default AddToDoButton;