import React from "react";
// import { render } from "@testing-library/jest-native";
import { render } from "@testing-library/react-native";

import Input from "./index";
import { useTheme } from "styled-components";
import theme from "../../../global/styles/theme";
import "jest-styled-components";
import { ThemeProvider } from "styled-components/native";

const Provider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Input Component", () => {
  it("must have specific border color when active", () => {
    const { getByTestId } = render(
      <Input
        // theme={theme}
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      { wrapper: Provider }
    );

    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual(
      theme.colors.attention
    );
    expect(inputComponent.props.style[0].borderWidth).toEqual(3);
  });
});
