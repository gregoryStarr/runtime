import { makeObservable, computed, reaction, observable, runInAction } from "mobx";
import { CRUD } from "../services/CRUD";
import { Task } from "../structures/Task";
import uuid from "react-uuid";
class TaskStore {
  CURRENTTASK = null;
  tasks=[];
  modalIsShown=false
  constructor() {
    makeObservable(this, {
      tasks:observable,
      modalIsShown:observable,
      CURRENTTASK:observable
    });
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
     
    ];
    
    
    this.showModal = (value) => {
      this.modalIsShown = value
    }
    
    // this.error = "";
    // this.taskService = new CRUD();
    // this.selectedTask = null;
    // this.debugOut = "No output";

    // ##################################################
    this.addTask = () => {
      const task = new Task({
        id: uuid(),
        name: "New Task",
        status: "todo",
        notes: [],
        image: null,
        attachments: [],
        author: "System Created",
        dueDate: null,
        startDate: Date.now(),
        duration: null,
        difficutly: "easy",
      })

      this.tasks.push(task);
      return task;
    }

  
    this.clearCurrentTask = () => {
      this.currentTask = null;
    };

    this.currentTask = this.tasks[0]
  }


  // ######################
  // Getter Setters

  get currentTask(){
    return this.SELECTEDTASK
  }

  set currentTask(t){
    this.CURRENTTASK=t;
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

  

  // updateTask = async (taskId, task) => {
  //   try {
  //     // const projects = await fetchGithubProjectsSomehow();
  //     // const filteredProjects = somePreprocessing(projects);
  //     runInAction(async () => {
  //       await this.taskService.updateTask(taskId, task);
  //       const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
  //       this.tasks[taskIndex] = task;
  //     });
  //   } catch (e) {
  //     runInAction(() => {
  //       this.error = "error";
  //     });
  //   }
  // };

  // deleteTask = async (taskId) => {
  //   try {
  //     // const projects = await fetchGithubProjectsSomehow();
  //     // const filteredProjects = somePreprocessing(projects);
  //     runInAction(async () => {
  //       await this.taskService.deleteTask(taskId);
  //       this.tasks = this.tasks.filter((task) => task.id !== taskId);
  //     });
  //   } catch (e) {
  //     runInAction(() => {
  //       this.error = "error";
  //     });
  //   }
  // };

  todoTasks = () => {
    return this.tasks.filter((task) => task.status === "todo");
  };

  inProgressTasks = () => {
    return this.tasks.filter((task) => task.status === "in progress");
  };

  doneTasks = () => {
    return this.tasks.filter((task) => task.status === "done");
  };



  
  
}

export { TaskStore };
