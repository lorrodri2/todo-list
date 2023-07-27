import React from "react";
import PropTypes from 'prop-types';
import{ Area, Label, Form, AddButton } from '../util/Style';

const TopBar = ({ username, onLogOff }) => {
    const logout = e => {
        e.preventDefault();
    
        onLogOff(true);
    };

    return (
        <div>
            <Area>
                <Label>
                    {username}
                </Label>
                <Form onSubmit={logout}> 
                    <AddButton type="submit">Logout</AddButton>
                </Form>
            </Area>
        </div>
    );
}

TopBar.propTypes = {
    username: PropTypes.string.isRequired,
    onLogOff: PropTypes.func.isRequired,
}

export default TopBar;