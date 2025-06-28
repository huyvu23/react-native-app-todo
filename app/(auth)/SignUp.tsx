import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

const SignUpScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    console.log("Sign Up with:", form);
    // You would usually call your sign-up API here
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Tạo tài khoản</Text>

          <TextInput
            label="Email"
            value={form.username}
            onChangeText={(text) => handleChange("username", text)}
            mode="flat"
            style={styles.input}
          />

          <TextInput
            label="Mật khẩu"
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
            mode="flat"
            style={styles.input}
          />

          <TextInput
            label="Xác nhận mật khẩu"
            value={form.confirmPassword}
            onChangeText={(text) => handleChange("confirmPassword", text)}
            secureTextEntry
            mode="flat"
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={handleSignUp}
            style={styles.button}
            disabled={!form.password || form.password !== form.confirmPassword}
          >
            Đăng ký
          </Button>

          <Button
            mode="text"
            onPress={() => {
              navigation.goBack();
            }}
            textColor={colors.primary}
          >
            Bạn đã có tài khoản? Đăng nhập
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 16,
  },
});

export default SignUpScreen;
