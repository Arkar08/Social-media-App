import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="optConfirm" />
        <Stack.Screen name="forgetPassword" />
        <Stack.Screen name="changePassword" />
    </Stack>
  )
}

export default AuthLayout;