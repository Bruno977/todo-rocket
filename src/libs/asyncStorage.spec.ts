import { mockTasks } from "../__mocks__/task/mockTasks";
import { getStorageTasks, setStorageTask } from "./asyncStorage"

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