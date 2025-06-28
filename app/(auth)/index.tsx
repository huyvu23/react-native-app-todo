import { Link } from "expo-router";
import React from "react";
import { Button, Text } from "react-native-paper";

const SignIn = () => {
  return (
    <>
      <Text>Hello</Text>
      <Link href="/signin">
        <Button mode="contained-tonal">Đăng ký</Button>
      </Link>
    </>
  );
};

export default SignIn;
