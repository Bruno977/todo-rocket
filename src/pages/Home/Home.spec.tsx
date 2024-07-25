import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Home } from ".";
import { getStorageTasks } from "../../libs/asyncStorage";
import { mockOneTask, mockTasks } from "../../__mocks__/task/mockTasks";
import {
  BUTTON_TEST_ID,
  INPUT_TEST_ID,
} from "../../components/InputCreateTask";
import {
  BUTTON_COMPLETE_TASK_TEST_ID,
  BUTTON_REMOVE_TASK_TEST_ID,
  TASK_ITEM_COMPLETED_TEST_ID,
  TASK_ITEM_CREATED_TEST_ID,
} from "../../components/TaskItem";

jest.mock("../../libs/asyncStorage", () => ({
  getStorageTasks: jest.fn(),
  setStorageTask: jest.fn(),
}));

const mockedGetStorageTasks = getStorageTasks as jest.MockedFunction<
  typeof getStorageTasks
>;

describe("<Home/>", () => {
  it("should render empty tasks", async () => {
    mockedGetStorageTasks.mockResolvedValue([]);
    const { getByText } = render(<Home />);
    await waitFor(() => {
      expect(getByText("Você ainda não tem tarefas cadastradas")).toBeTruthy();
    });
  });
  it("should render tasks", async () => {
    mockedGetStorageTasks.mockResolvedValue(mockTasks);
    const { getByText } = render(<Home />);
    await waitFor(() => {
      expect(getByText("Task 1")).toBeTruthy();
    });
  });
  it("should create task", async () => {
    mockedGetStorageTasks.mockResolvedValue([]);
    const { getByText, getByTestId } = render(<Home />);
    const taskName = "nova tarefa";

    fireEvent.changeText(getByTestId(INPUT_TEST_ID), taskName);
    fireEvent.press(getByTestId(BUTTON_TEST_ID));

    await waitFor(() => {
      expect(getByText(taskName)).toBeTruthy();
    });
  });
  it("should complete task", async () => {
    const task = [mockOneTask];
    mockedGetStorageTasks.mockResolvedValue(task);
    const { getByTestId } = render(<Home />);
    await waitFor(() => {
      expect(getByTestId(TASK_ITEM_CREATED_TEST_ID)).toBeTruthy();
    });
    fireEvent.press(getByTestId(BUTTON_COMPLETE_TASK_TEST_ID));
    await waitFor(() => {
      expect(getByTestId(TASK_ITEM_COMPLETED_TEST_ID)).toBeTruthy();
    });
  });
  it("should be remove task", async () => {
    const task = [mockOneTask];
    mockedGetStorageTasks.mockResolvedValue(task);
    const { getByTestId, getByText } = render(<Home />);
    await waitFor(() => {
      expect(getByText("Task 1")).toBeTruthy();
    });
    fireEvent.press(getByTestId(BUTTON_REMOVE_TASK_TEST_ID));
    await waitFor(() => {
      expect(getByText("Você ainda não tem tarefas cadastradas")).toBeTruthy();
    });
  });
});
