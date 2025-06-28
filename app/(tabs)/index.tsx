import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <>
      <CustomSafeAreaView>
        <Text>Hello</Text>
        <Link href="/(auth)">
          <Button mode="contained-tonal">Login</Button>
        </Link>
      </CustomSafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
