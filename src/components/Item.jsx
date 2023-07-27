import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import { ItemArea, ListItem, DeleteButton } from '../util/Style';

const Item = ({ id, content, complete, onDeleteToDo, onToggle }) => {

    const handleOnDelete = useCallback(() => 
        onDeleteToDo(id), [id, onDeleteToDo]
    );

    const handleOnToggle = useCallback(() => 
        onToggle(id),[id, onToggle]
    );

    return (
        <ItemArea>
            <ListItem key={id}>
                <p style={{textDecoration: complete ? "line-through" : ""}} onClick={handleOnToggle}>{content}</p>     
            </ListItem>
            <DeleteButton onClick={handleOnDelete}>X</DeleteButton>
        </ItemArea>
    );
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    onDeleteToDo: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

export default Item;
