import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import { Home } from ".";
import { getStorageTasks, setStorageTask } from "../../libs/asyncStorage";
import { mockTasks } from "../../__mocks__/task/mockTasks";
import {
  BUTTON_TEST_ID,
  INPUT_TEST_ID,
} from "../../components/InputCreateTask";

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
});
