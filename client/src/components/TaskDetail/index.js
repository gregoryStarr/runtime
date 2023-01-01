import { observer } from "mobx-react-lite";
import { useState, useCallback, useContext } from "react";
import { Form, Button, Input, Checkbox, Label, Icon, ButtonGroup } from "semantic-ui-react";
import { action } from "mobx";
import { TaskStoreContext } from "stores/TaskStoreContext";
import './index.scss'
import { removeObjectWithId } from "utils/helpers";
const TaskDetail = observer( ( )=> {
  const taskStore = useContext(TaskStoreContext);
  const task = taskStore.selectedTask;
  const [showConfirm, setShowConfirm] = useState(false)
  
  const setTask = action((newTask) => {
    //taskStore.tasks.filter( (t)=> t.name === taskStore.selectedTask.name)[0] = newTask;
    const newTasks = removeObjectWithId(taskStore.tasks, task.name);
    newTasks.push(newTask);
    taskStore.clearSelectedTask();
    taskStore.tasks = newTasks;
    console.log(JSON.stringify(taskStore.tasks[1]));
  });

  const handleSubmit = action((e) => {
    e.preventDefault();
    const newTask = {...taskStore.CURRENTTASK}
    const newTasks = removeObjectWithId(taskStore.tasks, taskStore.CURRENTTASK.name);
    newTasks.push(newTask);
    taskStore.clearCurrentTask();
    taskStore.tasks = newTasks;
    console.log(JSON.stringify(taskStore.tasks[1]));
  });

  const showConfirmDelete = () => {

  }

  return (
  <div>
     <div className="task-detail">
      <h1>Task Details</h1>
      
      {!taskStore.CURRENTTASK && (
        <div>
          {" "}
          <Icon name="alarm" /> No task selected!{" "}
        </div>
      )}

      { !showConfirm &&
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <section>
            <Icon name="tags" />
            <label>Name</label>
          </section>
          <Input
            placeholder="Title"
            id="name"
            onChange={action((e) => {
                taskStore.CURRENTTASK.name=e.currentTarget.value;
            })}
            value={taskStore.CURRENTTASK.name}
          />
        </Form.Field>
        <Form.Field>
          <section>
            <Icon name="pencil alternate" />
            <label>Author</label>
          </section>
          <Input
            placeholder="Author"
            id="author"
            onChange={(e) => {
              // task.author=e.currentTarget.value;
            }}
            // value={task.author}
          />
        </Form.Field>
        <Form.Field>
          <section>
            <Icon name="bullseye" />
            <label>Description</label>
          </section>
          <Input
            placeholder="Description"
            id="description"
            onChange={(e) => {
              // task.description=e.currentTarget.value;
            }}
            // value={task.description}
          />
        </Form.Field>
        <Form.Field>
          <section>
            <Icon name="star" />
            <label>Difficulty</label>
          </section>
          <Input
            placeholder="Difficulty"
            id="difficulty"
            onChange={(e) => {
              // task.difficulty=e.currentTarget.value;
            }}
            // value={task.difficutly}
          />
        </Form.Field>
        <Form.Field>
          <section>
            <Icon name="heart" />
            <label>Status</label>
          </section>
          <Input
            placeholder="Status"
            id="status"
            onChange={action((e) => {
                taskStore.CURRENTTASK.status=e.currentTarget.value;
            })}
            value={taskStore?.CURRENTTASK?.status || 'not set'}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Assign to self" />
        </Form.Field>
       <ButtonGroup>
       <Button type="submit">Submit</Button>
        <Button color="red" onClick={() => setShowConfirm(true) }>Delete</Button>
        <Button onClick={action(() => taskStore.clearCurrentTask())}>Close</Button>
       </ButtonGroup>
      </Form>
      }

      { showConfirm && 
          <div>
            <p>Confirm Delete?</p>
            <ButtonGroup>
                <Button color="red" onClick={ action( () => {taskStore.deleteTask(taskStore.CURRENTTASK);taskStore.clearCurrentTask()} )}>Confirm Deletion</Button>
                <Button onClick={() => setShowConfirm(false) }>Cancel</Button>
            </ButtonGroup>
          </div>
         
    }
    </div></div>
  );
});
export { TaskDetail };
