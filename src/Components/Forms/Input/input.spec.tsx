import React from "react";
// import { render } from "@testing-library/jest-native";
import { render } from "@testing-library/react-native";

import Input from "./index";
import { useTheme } from "styled-components";
import theme from "../../../global/styles/theme";

describe("Input Component", () => {
  it("must have specific border color when active", () => {
    const { getByTestId } = render(
      <Input
        theme={theme}
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />
    );

    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual("#e83f5b");
    // expect(inputComponent.props.style[0].borderWidth).toEqual(3);
  });
});
