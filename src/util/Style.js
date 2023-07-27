import styled from 'styled-components';

export const ItemInput = styled.input` 
    width: 100%;
    font-size: 22px;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const AddButton = styled.button` 
    width: 25%;
    background-color: #44bba4;
    color: white;
    font-size: 22px;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;  

export const FormArea = styled.div` 
    display: flex;
    justify-content: center;
    background-color: #24272b;
    padding: 30px;
    margin: 10px
    color: white;
    text-align: center;
`;

export const Area = styled.div` 
    display: flex;
    justify-content: center;
    background-color: #24272b;
    padding: 30px;
    margin: 10px
    color: white;
    text-align: center;
`;

export const Form = styled.form` 
    width: 100%;
`;

export const ListArea = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const ItemArea = styled.div`
    display: flex;
    justify-content: flex-start;
    background: #f4f7fa;
    border: 2px solid #24272b;%;
    color: black;
    font-size: 22px;
    padding: 8px;
    margin:2px;
`;

export const ListItem = styled.div`
    width: 90%;
`;

export const DeleteButton = styled.button`
    background: #44bba4;
    border: 1px solid #44bba4;
    color: white;
    width: 10%;
    padding: 10px;
    margin-left: 15px;  
    border-radius: 3px;
`;

export const Label = styled.text`
    color: white;
`;