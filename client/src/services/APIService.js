import axios from 'axios'
export const TASK_API_BASE_URL = 'http://localhost:3001/api/tasks'
class APIService {
    constructor() {
        // constructor
    }
    createTask = async (task) => {
        try {
            const response = await axios.post(TASK_API_BASE_URL, task)
            return response.data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    getTasks = async () => {
        try {
            const response = await axios.get(TASK_API_BASE_URL)
            return response.data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    getTask = async (id) => {
        try {
            const response = await axios.get(`${TASK_API_BASE_URL}/${id}`)
            return response.data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    updateTask = async (id, task) => {
        try {
            const response = await axios.put(`${TASK_API_BASE_URL}/${id}`, task)
            return response.data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    deleteTask = async (id) => {
        try {
            const response = await axios.delete(`${TASK_API_BASE_URL}/${id}`)
            return response.data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    login = (username, password) => {
        console.log('sending login request')
        const res = fetch(TASK_API_BASE_URL+'/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            return res
        })
        return res
    }

    createUser = async (username, password) => {
        const res = await fetch('/auth/createAuth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        if (res.ok) {
            const user = await res.json()
            console.log(user)
        } else {
            console.error(res.statusText)
        }
    }

    // return {login,
    //   deleteTask,
    //   updateTask,
    //   getTask,
    //   createTask,
    //   createUser
    // }
}

export { APIService }
