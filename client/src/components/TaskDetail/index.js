import { observer } from "mobx-react-lite";
import { useState, useCallback } from "react";
import { Form, Button, Input, Checkbox, Label, Icon } from "semantic-ui-react";
import { Task } from "structures/Task";
import { action } from "mobx";

const TaskDetail = observer((props) => {
  const { task, taskStore } = props;
  const [id, setID] = useState(task.id);
  const [name, setNAME] = useState(task.name);
  const [status, setSTATUS] = useState(task.status);
  const [notes, setNOTES] = useState(task.notes);
  const [image, setIMAGE] = useState(task.image);
  const [description, setDESCRIPTION] = useState(task.description);
  const [attachments, setATTACHMENTS] = useState(task.attachments);
  const [author, setAUTHOR] = useState(task.author);
  const [dueDate, setDUEDATE] = useState(task.dueDate);
  const [startDate, setSTARTDATE] = useState(task.startDate);
  const [duration, setDURATION] = useState(task.duration);
  const [difficutly, setDIFFICUTLY] = useState(task.difficutly);
  const [assignedTo, setASSIGNEDTO] = useState(task.assignedTo);

  function removeObjectWithId(arr, id) {
    // Making a copy with the Array from() method
    const arrCopy = Array.from(arr);

    const objWithIdIndex = arrCopy.findIndex((obj) => obj.name === id);
    arrCopy.splice(objWithIdIndex, 1);
    return arrCopy;
  }

  const setTask = action((newTask) => {
    //taskStore.tasks.filter( (t)=> t.name === taskStore.selectedTask.name)[0] = newTask;
    const newTasks = removeObjectWithId(taskStore.tasks, task.name);
    newTasks.push(newTask);
    taskStore.clearSelectedTask();
    taskStore.tasks = newTasks;
    console.log(JSON.stringify(taskStore.tasks[1]));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = new Task("", "", "", "", "", "", "", "", "", "");
    const fields = document.querySelectorAll("input");
    const fieldsArr = Array.from(fields);
    fieldsArr.map((field, index) => {
      if (field.id) {
        newTask[field.id] = field.value;
      }
    });
    setTask(newTask);
  };

  return (
    <div className="task-detail">
      <h1>Task Details</h1>
      {!task && (
        <div>
          {" "}
          <Icon name="alarm" /> No task selected!{" "}
        </div>
      )}
      {task && (
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <section>
              <Icon name="tags" />
              <label>Name</label>
            </section>
            <Input
              placeholder="Title"
              id="name"
              onChange={(e) => {
                setNAME(e.currentTarget.value);
              }}
              value={name}
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
                setAUTHOR(e.currentTarget.value);
              }}
              value={author}
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
                setDESCRIPTION(e.currentTarget.value);
              }}
              value={description}
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
                setDIFFICUTLY(e.currentTarget.value);
              }}
              value={difficutly}
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
              onChange={(e) => {
                setSTATUS(e.currentTarget.value);
              }}
              value={status}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Assign to self" />
          </Form.Field>
          <Button type="submit">Submit</Button>
          <Button onClick={() => taskStore.clearSelectedTask()}>Close</Button>
        </Form>
      )}
    </div>
  );
});
export { TaskDetail };
