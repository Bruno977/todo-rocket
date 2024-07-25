import { TaskProps } from "../@types/task";

export function removeTask(tasks: TaskProps[], taskID: string){
  const newTasks: TaskProps[] = tasks.filter(
    (task) => task.id !== taskID
  );
  return newTasks;
}