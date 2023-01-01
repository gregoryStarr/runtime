import { createContext } from "react";
import { TaskStore } from "../stores/TaskStore";

const TaskStoreContext = createContext(new TaskStore());

export {TaskStoreContext};
