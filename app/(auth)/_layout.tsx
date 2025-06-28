import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <CustomSafeAreaView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Không cần định nghĩa tên ở đây, Expo Router tự động xử lý */}
      </Stack>
    </CustomSafeAreaView>
  );
};

export default AuthLayout;
