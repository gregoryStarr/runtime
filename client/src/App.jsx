import React, { useCallback, useContext, useEffect, useState } from "react";
import { KanbanBoard } from "components/KanbanBoard";
import { Modal, Button, Image, Header } from "semantic-ui-react";
import { TaskDetail } from "components/TaskDetail";
import {TaskStoreContext} from "stores/TaskStoreContext";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import {AppMenu} from 'components/AppMenu'
import "./App.scss";

const App = observer(() => {
  const taskStore = useContext(TaskStoreContext);

  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="app">
      <AppMenu />
      <KanbanBoard/>
      {taskStore.CURRENTTASK && (
        <div className="modal">
          <TaskDetail />
        </div>
      )}
    </div>
  );
});

export { App };
