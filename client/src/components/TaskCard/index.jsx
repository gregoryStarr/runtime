import { observer } from "mobx-react";
import { Draggable } from "react-beautiful-dnd";
import "./index.scss";
import { useContext } from "react";
import TaskStoreContext from "stores/TaskStoreContext";

const TaskCard = observer(({ task, index }) => {
  const taskStore = useContext(TaskStoreContext);

  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className="kanban-task gradient"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <a
            onClick={() => {
              taskStore.selectTask(task);
            }}
          >
            {task.name}
          </a>
          <h6>ID:{task.id}</h6>
        </div>
      )}
    </Draggable>
  );
});

export { TaskCard };
