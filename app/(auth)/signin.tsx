import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign In Screen</Text>
      {/* <Button
        title="Go to Sign Up"
        onPress={() => router.push("/auth/sign-up")}
      /> */}
    </View>
  );
}
