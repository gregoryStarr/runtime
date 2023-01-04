import { makeObservable, computed, reaction, observable, runInAction } from "mobx";
import { CRUD } from "../services/CRUD";
import { Task } from "../structures/Task";
import { User } from "../structures/User";
import uuid from "react-uuid";
import DEFAULTDATA from 'data/tasks.json'
class TaskStore {
  CURRENTTASK = null;
  CURRENTUSER =null;
  tasks=[];
  modalIsShown=false
  DefaultTasks=DEFAULTDATA
  users:[];
  constructor() {
    makeObservable(this, {
      tasks:observable,
      modalIsShown:observable,
      CURRENTTASK:observable,
      CURRENTUSER:observable,
      DefaultTasks:observable,
    });
    this.tasks = [];

    this.users = [
      new User({firstName:'Greg', role:'2'}),
      new User({firstName:'Admin', role:'3'})
    ]

    this.getDefaultData = ()=>{

      this.DefaultTasks.map((t)=> { this.addTask(t)})
      return this.tasks;
    }
    
    
    this.showModal = (value) => {
      this.modalIsShown = value
    }
    
    // this.error = "";
    // this.taskService = new CRUD();
    // this.selectedTask = null;
    // this.debugOut = "No output";

    // ##################################################
    this.addTask = (t=null) => {
      console.log(t)
      let task = t;
      if(task===null){
        task = new Task({
          id: uuid(),
          name: "New Task",
          status: "todo",
          notes: [],
          image: null,
          attachments: [],
          author: this.CURRENTUSER.firstName || "System",
          dueDate: null,
          startDate: Date.now(),
          duration: null,
          difficutly: "easy",
          description:'How to do a forced-push to another branch in Githttps://stackoverflow.com › questions › how-to-do-a-fo... Apr 29, 2016 — This answer is about the use of the + force-push character, not about force-pushing in general. Just to be a bit more complete than the accepted ... 2 answers · Top answer: The + needs to come at the beginning of the argument representing the couple. git push ... Push commits to another branch - git - Stack Overflow Dec 16, 2012 Force "git push" to overwrite remote files - Stack Overflow May 9, 2012 Push to another branch with git - Stack Overflow Jul 13, 2017 git - Can I force-push on a branch which only I work on? Jun 8, 2022 More results from stackoverflow.com '
        })
      }else{
        task = new Task(task)
      }
      task.id = uuid()
      this.tasks.push(task);
      return task;
    }

  
    this.clearCurrentTask = () => {
      this.currentTask = null;
    };

    
    this.deleteTask = (targetTask) => {
      try {
        const newTasks = this.tasks.filter((task) => task.id !== targetTask.id)
        this.tasks = newTasks;
        return this.tasks;
      } catch (e) {
        this.error = "Encountered an error"
      }
    };

    
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
