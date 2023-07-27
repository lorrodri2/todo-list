
import axios from "axios";
import { GraphQLClient, gql } from 'graphql-request'

const endpoint = `http://todo-members.dra4dxdaexd4azec.eastus.azurecontainer.io:8080/graphql`

const queryTodos = gql`
    query list($userId: ID!) {
        Item(userId: $userId) {
            id
            title
            description
            completed
        }
    }
`

export async function loginUser(username, password) {
    const queryLogin = gql`
        query {
            login(input:{
                username:"${username}",
                password:"${password}"
            }) {
                id,
                username
            }
        }`

    console.log(queryLogin);
    console.log(username);
    console.log(password);
    const client = new GraphQLClient(endpoint)
    const data = await client.request(queryLogin)    
    console.log(data)

    return data;
}


export async function getTodos(userId) {
    const variables = {
        userId: userId
    }

    //const data = await request(queryTodos, variables)
    //console.log(data)

    //return data;
}

export const addTodo = () => {
    return axios.get('https://demo8787490.mockable.io/todos');
};

export const updateTodo = () => {
    return axios.get('https://demo8787490.mockable.io/todos');
};

export const deleteTodo = () => {
    return axios.get('https://demo8787490.mockable.io/todos');
};