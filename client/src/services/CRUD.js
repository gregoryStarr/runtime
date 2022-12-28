import axios from "axios";

export const TASK_API_BASE_URL = "http://localhost:3000/api/tasks";

export class CRUD {
  async createTask(task) {
    try {
      const response = await axios.post(TASK_API_BASE_URL, task);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTasks() {
    try {
      const response = await axios.get(TASK_API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTask(id) {
    try {
      const response = await axios.get(`${TASK_API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateTask(id, task) {
    try {
      const response = await axios.put(`${TASK_API_BASE_URL}/${id}`, task);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteTask(id) {
    try {
      const response = await axios.delete(`${TASK_API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
