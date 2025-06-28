import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <CustomSafeAreaView>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Không cần định nghĩa tên ở đây, Expo Router tự động xử lý */}
      </Stack>
    </CustomSafeAreaView>
  );
};

export default AuthLayout;
