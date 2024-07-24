import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { BUTTON_TEST_ID, INPUT_TEST_ID, InputCreateTask } from ".";

describe("<InputCreateTask />", () => {
  it("should be render correctly", () => {
    const { getByPlaceholderText } = render(
      <InputCreateTask
        value=""
        setValue={() => {}}
        handleCreateTask={() => {}}
      />
    );
    expect(getByPlaceholderText("Adicione uma nova tarefa"));
  });
  it("should change value when setValue is called", () => {
    const setValueMock = jest.fn();
    const { getByTestId } = render(
      <InputCreateTask
        value=""
        setValue={setValueMock}
        handleCreateTask={() => {}}
      />
    );
    fireEvent.changeText(getByTestId(INPUT_TEST_ID), "nova tarefa");
    expect(setValueMock).toHaveBeenCalledWith("nova tarefa");
  });
  it("should called function handleCreateTask when button is pressed", () => {
    const handleCreateTaskMock = jest.fn();
    const { getByTestId } = render(
      <InputCreateTask
        value=""
        setValue={() => {}}
        handleCreateTask={handleCreateTaskMock}
      />
    );
    fireEvent.press(getByTestId(BUTTON_TEST_ID));
    expect(handleCreateTaskMock).toHaveBeenCalled();
  });
});
