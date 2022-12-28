
import TaskStore from './TaskStore';

describe('TaskStore', () => {
    it('should get tasks from the API', async () => {
      const taskStore = new TaskStore();
      await taskStore.getTasks();
      expect(taskStore.tasks).toEqual([]); // or whatever the expected response is
    });
  
    it('should add a task to the API', async () => {
      const taskStore = new TaskStore();
      const task = { name: 'Test Task' };
      await taskStore.addTask(task);
      expect(taskStore.tasks).toEqual([{ id: '123', name: 'Test Task' }]); // or whatever the expected response is
    });
  
    it('should update a task in the API', async () => {
      const taskStore = new TaskStore();
      taskStore.tasks = [{ id: '123', name: 'Test Task' }];
      const taskId = '123';
      const task = { id: taskId, name: 'Updated Task' };
      await taskStore.updateTask(taskId, task);
      expect(taskStore.tasks).toEqual([{ id: '123', name: 'Updated Task' }]);
    });
  
    it('should delete a task from the API', async () => {
      const taskStore = new TaskStore();
      taskStore.tasks = [{ id: '123', name: 'Test Task' }];
      const taskId = '123';
      await taskStore.deleteTask(taskId);
      expect(taskStore.tasks).toEqual([]);
    });
  
    it('should return the correct number of todo tasks', () => {
      const taskStore = new TaskStore();
      taskStore.tasks = [
        { id: '123', name: 'Test Task', status: 'todo' },
        { id: '456', name: 'Another Task', status: 'in progress' },
        { id: '789', name: 'Done Task', status: 'done' },
      ];
      expect(taskStore.todoTasks.length).toEqual(1);
    });
})