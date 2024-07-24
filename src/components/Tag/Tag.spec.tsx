import { render } from "@testing-library/react-native";
import { Tag } from ".";

describe("<Tag/>", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Tag color="#fff" name="teste" quantity={10} />
    );
    expect(getByText("teste"));
    expect(getByText("10"));
  });
});
