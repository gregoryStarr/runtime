import React, { useCallback, useContext, useEffect, useState } from "react";
import { KanbanBoard } from "components/KanbanBoard";
import { Modal, Button, Image, Header } from "semantic-ui-react";
import { TaskDetail } from "components/TaskDetail";
import TaskStoreContextt from "stores/TaskStoreContext";
import { observer } from "mobx-react";
import { action } from "mobx";
import "./App.scss";

const App = observer(() => {
  const taskStore = useContext(TaskStoreContextt);
  const [localTask, setLocalTask] = useState(taskStore.selectedTask);
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = useCallback(() => {
    taskStore.clearSelectedTask();
  }, [taskStore]);
  if (!modalOpen && taskStore.selectedTask !== null) {
    setModalOpen(true);
  }

  return (
    <div className="app">
      <KanbanBoard />
      {taskStore.selectedTask && (
        <div className="modal">
          <TaskDetail task={taskStore.selectedTask} />
        </div>
      )}
    </div>
  );
});

export { App };
