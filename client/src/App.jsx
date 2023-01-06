import { AppMenu } from "components/AppMenu";
import { KanbanBoard } from "components/KanbanBoard";
import Greeting from "components/Login";
import { NoteBoard } from "components/NoteBoard";
import { TaskDetail } from "components/TaskDetail";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { TaskStoreContext } from "stores/TaskStoreContext";
import "./App.scss";
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

  useEffect(() => {
    if (taskStore.CURRENTUSER) {
      setShowLoginUI(false);
    }
  }, [taskStore.CURRENTUSER]);

  return (
    <>
      {" "}
      {showLoginUI && <Greeting />}
      <div className="debug">{`show form : ${showLoginUI}/`}</div>
      <div className="app">
        <AppMenu />
        <NoteBoard />
        <KanbanBoard />
        {taskStore.CURRENTTASK && (
          <div className="modal">
            <TaskDetail />
          </div>
        )}
      </div>
    </>
  );
});

export { App };
