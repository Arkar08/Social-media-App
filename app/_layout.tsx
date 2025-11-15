import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from "react-native-safe-area-context";

function NavLayout() {


  const isLoggedIn = false;

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="auth" />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="createPost"/>
          <Stack.Screen name="chatList"/>
        </Stack.Protected>
      </Stack>
      <StatusBar style='auto'/>
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
