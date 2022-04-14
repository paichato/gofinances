import React from "react";
import { View, Text } from "react-native";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  active?: boolean;
}

export default function Input({ active = false, ...rest }: Props) {
  return <Container active={active} {...rest} />;
}
