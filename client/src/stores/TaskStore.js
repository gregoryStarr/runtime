import { makeAutoObservable, runInAction } from "mobx";
import { CRUD } from "../services/CRUD";
import { Task } from "../structures/Task";
import uuid from "react-uuid";
class TaskStore {
  constructor() {
    this.tasks = [
      new Task({
        id: uuid(),
        name: "Greg'S Task 1",
        status: "todo",
        notes: [],
        image: null,
        attachments: [],
        author: "System Created",
        dueDate: null,
        startDate: Date.now(),
        duration: null,
        difficutly: "easy",
      }),
      new Task({
        id: uuid(),
        name: "Mom's Task 2",
        status: "in progress",
        notes: [],
        image: null,
        attachments: [],
        author: "System Created",
        dueDate: null,
        startDate: Date.now(),
        duration: null,
        difficutly: "easy",
      }),
      new Task({
        id: uuid(),
        name: "Harry's Task 3",
        status: "done",
        notes: [],
        image: null,
        attachments: [],
        author: "System Created",
        dueDate: null,
        startDate: Date.now(),
        duration: null,
        difficutly: "easy",
      }),
    ];

    this.error = "";
    this.taskService = new CRUD();
    this.selectedTask = null;
    this.debugOut = "No output";

    makeAutoObservable(this);
  }

  getTasks = async () => {
    try {
      runInAction(async () => {
        const tasks = await this.taskService.getTasks();
        this.tasks = tasks;
      });
    } catch (e) {
      runInAction(() => {
        this.error = "error";
      });
    }
  };

  addTask = async (task) => {
    try {
      // const projects = await fetchGithubProjectsSomehow();
      // const filteredProjects = somePreprocessing(projects);
      runInAction(async () => {
        const newTask = await this.taskService.addTask(task);
        this.tasks.push(newTask);
      });
    } catch (e) {
      runInAction(() => {
        this.error = "error";
      });
    }
  };

  updateTask = async (taskId, task) => {
    try {
      // const projects = await fetchGithubProjectsSomehow();
      // const filteredProjects = somePreprocessing(projects);
      runInAction(async () => {
        await this.taskService.updateTask(taskId, task);
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        this.tasks[taskIndex] = task;
      });
    } catch (e) {
      runInAction(() => {
        this.error = "error";
      });
    }
  };

  deleteTask = async (taskId) => {
    try {
      // const projects = await fetchGithubProjectsSomehow();
      // const filteredProjects = somePreprocessing(projects);
      runInAction(async () => {
        await this.taskService.deleteTask(taskId);
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      });
    } catch (e) {
      runInAction(() => {
        this.error = "error";
      });
    }
  };

  todoTasks = () => {
    return this.tasks.filter((task) => task.status === "todo");
  };

  inProgressTasks = () => {
    return this.tasks.filter((task) => task.status === "in progress");
  };

  doneTasks = () => {
    return this.tasks.filter((task) => task.status === "done");
  };

  selectTask = (task) => {
    this.selectedTask = task;
  };

  clearSelectedTask = () => {
    this.selectedTask = null;
  };
}

export { TaskStore };
