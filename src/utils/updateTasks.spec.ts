import { mockTasks } from "../__mocks__/task/mockTasks"
import { updateTask } from "./updateTasks";

describe("updateTask", ()=>{
  it("should update a task", ()=>{
    const tasks = updateTask(mockTasks, "2");
    expect(tasks).toEqual([  
      { id: "1", name: "Task 1", isCompleted: false },
      { id: "2", name: "Task 2", isCompleted: false },
      { id: "3", name: "Task 3", isCompleted: false },
    ]);
  })
})