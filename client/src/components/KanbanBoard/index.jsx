import { observer } from "mobx-react";
import { DragDropContext } from "react-beautiful-dnd";
import { useMemo, useContext } from "react";
import TaskStoreContext from "../../stores/TaskStoreContext";
import { KanbanColumn } from "../KanbanColumn";
import "./index.scss";
import bkgImg from "./filigree.png";
const KanbanBoard = observer(() => {
  const taskStore = useContext(TaskStoreContext);
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // moved within the same list
    if (source.droppableId === destination.droppableId) {
      return;
    }

    // moved to a different list
    const task = taskStore.tasks.find((t) => {
      return t.id.toString() === result.draggableId;
    });
    task.status = destination.droppableId;
  };

  const columns = useMemo(
    () => [
      <KanbanColumn key="todo" status="todo" tasks={taskStore.tasks} />,
      <KanbanColumn
        key="in progress"
        status="in progress"
        tasks={taskStore.tasks}
      />,
      <KanbanColumn key="done" status="done" tasks={taskStore.tasks} />,
    ],
    [taskStore.tasks]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">{columns}</div>
    </DragDropContext>
  );
});

export { KanbanBoard };
