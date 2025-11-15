import OTPInput from "@/components/OTPInput";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OptConfirmScreen = () => {
  const router = useRouter();
  const [otpCode, setOtpCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(
    false
  );

  const readCode = (code: string) => {
    setOtpCode(code);
    setErrorMessage(false);
  };

  const ConfirmClick = () => {
    if (otpCode.length === 6) {
      console.log("OTP Code entered:", otpCode);
      router.push("/auth/changePassword");
    } else {
      setErrorMessage(true);
      Alert.alert("Error", "Please enter a valid 6-digit OTP code.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50, backgroundColor: "white" }}>
      <Text style={styles.headerText}>OTP Confirm</Text>
      <View style={{ padding: 20, marginTop: 20 }}>
        <OTPInput length={6} onCodeFilled={(code) => readCode(code)} />
        <View style={{ marginTop: 20 }}>
          {errorMessage && (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginTop: 10,
                fontSize: 16,
              }}
            >
              Please enter a valid 6-digit OTP code.
            </Text>
          )}
        </View>
        <Pressable
          onPress={ConfirmClick}
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 18,
              textTransform: "uppercase",
            }}
          >
            Confirm
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OptConfirmScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "blue",
  },
});
