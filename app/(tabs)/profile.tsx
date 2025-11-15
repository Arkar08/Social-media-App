import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const router = useRouter();

  const logout = () => {
    router.replace("/auth");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <Pressable
        onPress={logout}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "red",
          width: "100%",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    zIndex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    color: "blue",
  },
});
