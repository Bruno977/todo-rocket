import { getStorageTasks, setStorageTask } from "./asyncStorage"

const mockTasks = [
  { id: "1", name: "Task 1", isCompleted: false },
  { id: "2", name: "Task 2", isCompleted: true },
  { id: "3", name: "Task 3", isCompleted: false },
]

describe("asyncStorage", () => {
  it("should get empty storage", async() => {
    const response = await getStorageTasks();
    expect(response).toEqual([]);
  })
  it("should get all storage tasks", async() => {
    await setStorageTask(mockTasks);
    const response = await getStorageTasks();
    expect(response).toEqual(mockTasks);
  })

})