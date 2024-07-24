import React from "react";
import { render } from "@testing-library/react-native";

import { EmptyTask } from ".";

describe("<EmptyTask />", () => {
  it("should be render correctly", () => {
    const { getByText } = render(<EmptyTask />);
    expect(getByText("Você ainda não tem tarefas cadastradas"));
  });
});
