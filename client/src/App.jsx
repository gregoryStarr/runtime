import React, { useCallback, useContext, useEffect, useState } from "react";
import { KanbanBoard } from "components/KanbanBoard";
import { Modal, Button, Image, Header } from "semantic-ui-react";
import { TaskDetail } from "components/TaskDetail";
import {TaskStoreContext} from "stores/TaskStoreContext";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import {AppMenu} from 'components/AppMenu'

import "./App.scss";
import { NoteBoard } from "components/NoteBoard";
import Greeting from "components/Greetings";

const App = observer(() => {
  const taskStore = useContext(TaskStoreContext);

  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="app">
      <AppMenu />
      <NoteBoard />
      <KanbanBoard/>
      {taskStore.CURRENTTASK && (
        <div className="modal">
          <TaskDetail />
        </div>
      )}

      {taskStore.CURRENTUSER===null && <Greeting />}
    </div>
    
  );
});

export { App };
