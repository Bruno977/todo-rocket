import { fireEvent, render } from "@testing-library/react-native";
import {
  BUTTON_COMPLETE_TASK_TEST_ID,
  BUTTON_REMOVE_TASK_TEST_ID,
  TASK_ITEM_COMPLETED_TEST_ID,
  TASK_ITEM_CREATED_TEST_ID,
  TaskItem,
} from ".";
const mockTask = {
  id: "1",
  name: "teste",
  isCompleted: false,
};
const mockTaskCompleted = {
  id: "1",
  name: "teste",
  isCompleted: true,
};
describe("<TaskItem/>", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <TaskItem onPress={() => {}} onRemoveTask={() => {}} task={mockTask} />
    );
    expect(getByText("teste"));
  });
  it("should render task completed", () => {
    const { getByTestId } = render(
      <TaskItem
        onPress={() => {}}
        onRemoveTask={() => {}}
        task={mockTaskCompleted}
      />
    );
    expect(getByTestId(TASK_ITEM_COMPLETED_TEST_ID)).toBeTruthy();
  });
  it("should render task created", () => {
    const { getByTestId } = render(
      <TaskItem onPress={() => {}} onRemoveTask={() => {}} task={mockTask} />
    );
    expect(getByTestId(TASK_ITEM_CREATED_TEST_ID)).toBeTruthy();
  });
  it("should called function when button complete is pressed", () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <TaskItem
        onPress={mockFunction}
        onRemoveTask={() => {}}
        task={mockTask}
      />
    );
    fireEvent.press(getByTestId(BUTTON_COMPLETE_TASK_TEST_ID));
    expect(mockFunction).toHaveBeenCalled();
  });
  it("should called function when button remove is pressed", () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <TaskItem
        onPress={() => {}}
        onRemoveTask={mockFunction}
        task={mockTask}
      />
    );
    fireEvent.press(getByTestId(BUTTON_REMOVE_TASK_TEST_ID));
    expect(mockFunction).toHaveBeenCalled();
  });
});
