import { mockTasks } from "../__mocks__/task/mockTasks"
import { removeTask } from "./removeTasks"

describe("removeTask", ()=>{
  it("should remove a task", ()=>{
    const tasks = removeTask(mockTasks, "2");
    expect(tasks).toEqual([
      { id: "1", name: "Task 1", isCompleted: false },
      { id: "3", name: "Task 3", isCompleted: false },
    ]);
  })
})