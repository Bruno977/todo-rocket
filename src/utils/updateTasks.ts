import { TaskProps } from "../@types/task";

export function updateTask(tasks: TaskProps[], taskId: string){
  const updateTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted };
    } else {
      return task;
    }
  });
  return updateTasks
}