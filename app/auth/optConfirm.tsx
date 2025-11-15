import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OptConfirmScreen = () => {
  const router = useRouter();

  const ConfirmClick = () => {
    router.push("/auth/changePassword");
  };

  return (
    <SafeAreaView>
      <Text style={styles.text}>optConfirm</Text>
      <Pressable onPress={ConfirmClick}>
        <Text>Click Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OptConfirmScreen;

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
