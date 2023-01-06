import React, { useCallback, useContext, useEffect, useState } from "react";
import { KanbanBoard } from "components/KanbanBoard";
import { Modal, Button, Image, Header, Message } from "semantic-ui-react";
import { TaskDetail } from "components/TaskDetail";
import { TaskStoreContext } from "stores/TaskStoreContext";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { AppMenu } from "components/AppMenu";
import "./App.scss";
import { NoteBoard } from "components/NoteBoard";
import Greeting from "components/Login";
const App = observer(() => {
  const taskStore = useContext(TaskStoreContext);
  const [showLoginUI, setShowLoginUI] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (taskStore.CURRENTUSER) {
      setShowLoginUI(false);
    }
  }, [taskStore.CURRENTUSER]);

  useEffect(() => {
    setShowLoginUI(true);
  }, []);

  return (
    <div className="app">
      <AppMenu />
      <NoteBoard />
      <KanbanBoard />
      {taskStore.CURRENTTASK && (
        <div className="modal">
          <TaskDetail />
        </div>
      )}
      {showLoginUI && <Greeting />}

      <div className="debug">{`show form : ${showLoginUI}/`}</div>
    </div>
  );
});

export { App };
