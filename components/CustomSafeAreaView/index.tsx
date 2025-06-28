import React from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface CustomProps extends SafeAreaViewProps {}

const CustomSafeAreaView = ({
  children,
  style,
  edges = ["left", "right", "bottom"],
  ...rest
}: CustomProps) => {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]} edges={edges} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
