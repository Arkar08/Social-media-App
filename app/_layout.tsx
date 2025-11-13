import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from "react-native-safe-area-context";

function NavLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="createPost"/>
        <Stack.Screen name="chatList"/>
      </Stack>
      <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={'blue'}/>
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <NavLayout />
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}
