import { CRUD as TaskService } from "./CRUD";

describe("TaskService", () => {
  it("should get tasks from the API", async () => {
    const tasks = await TaskService.getTasks();
    expect(tasks).toEqual([]); // or whatever the expected response is
  });

  it("should add a task to the API", async () => {
    const task = { name: "Test Task" };
    const newTask = await TaskService.addTask(task);
    expect(newTask).toEqual({ id: "123", name: "Test Task" }); // or whatever the expected response is
  });

  it("should update a task in the API", async () => {
    const taskId = "123";
    const task = { id: taskId, name: "Updated Task" };
    await TaskService.updateTask(taskId, task);
    // you can add assertions here to verify that the update was successful
  });

  it("should delete a task from the API", async () => {
    const taskId = "123";
    await TaskService.deleteTask(taskId);
    // you can add assertions here to verify that the delete was successful
  });
});
