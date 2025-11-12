import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FollowingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Followings</Text>
      </View>
    </SafeAreaView>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    zIndex: 1,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "500",
  },
});
