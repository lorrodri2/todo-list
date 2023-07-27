import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import{ ItemInput, AddButton, FormArea, Form } from '../util/Style';
import { getTodos, loginUser } from '../services/Service';


const Login = ({ onLoginUser }) => {

    const [errorMessages, setErrorMessages] = useState({});
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

    let user = {
            userId: "user1",
            username: "user1"
    };

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        },
        {
            id: 1,
            username: "david",
            password: "123456"
        }
    ];

    const handleOnLoginUser = useCallback(() => 
        onLoginUser(user), [user, onLoginUser]
    );

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const login = (event) => {
        event.preventDefault();
        
        loginUser(uname, pass);

        const userData = database.find((user) => user.username === uname);
    
        if (userData) {
          if (userData.password !== pass) {
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            user.username = userData.username;
            user.userId = userData.id;
            handleOnLoginUser();
          }
        } else {
          setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const handleUnameChange = (e) => {
        setUname(e.currentTarget.value)
    };

    const handlePassChange = (e) => {
        setPass(e.currentTarget.value)
    };
    
    return (
        <div>
            <FormArea>
                <Form onSubmit={login}> 
                    <ItemInput 
                        value={uname}
                        onChange={handleUnameChange}
                        placeholder="Username" />
                    <div>
                        {renderErrorMessage("uname")}
                    </div>
                    <ItemInput 
                        value={pass}
                        onChange={handlePassChange}
                        type="password"
                        placeholder="Password" >
                    </ItemInput>
                    <div>
                        {renderErrorMessage("pass")}
                    </div>
                    <AddButton type="submit">Add</AddButton>
                </Form>
            </FormArea>
        </div>
    );
}

Login.propTypes = {
    onLoginUser: PropTypes.func.isRequired,
};

export default Login;
