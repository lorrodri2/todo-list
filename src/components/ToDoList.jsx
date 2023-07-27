import React from "react";
import Item from './Item';
import PropTypes from 'prop-types';
import { ListArea, ListItem } from '../util/Style';

const ToDoList = ({ toDoItems, onDeleteToDo, onToggle }) => {

    return (
        <ListArea>
            {toDoItems.map(({id, content, complete}) => (
                <Item 
                id={id}
                content={content}
                complete={complete}
                onDeleteToDo={onDeleteToDo}
                onToggle={onToggle}/>
            ))}
        </ListArea>
    );
}

ToDoList.propTypes = {
    toDoItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          content: PropTypes.string.isRequired,
          complete: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onDeleteToDo: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default ToDoList;