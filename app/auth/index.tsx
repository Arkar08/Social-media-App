import InputContainer from "@/components/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const loginProfile = require("@/assets/images/mobile-office.png");
const width = Dimensions.get("window").width;

const loginSchema = z.object({
  userName: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const LoginScreen = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
    reset({
      userName: "",
      password: "",
    });
    router.push("/(tabs)");
  };

  const registerClick = () => {
    router.push("/auth/register");
  };

  const forgetPasswordClick = () => {
    router.push("/auth/forgetPassword");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <View style={styles.loginImageContainer}>
          <Image source={loginProfile} style={styles.loginImage} />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.headerText}>LOGIN</Text>
          <View style={{ padding: 20, marginTop: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <InputContainer
                control={control}
                errors={errors}
                label="Username or Email or Phone Number"
                placeholder={"Enter Username or Email or Phone Number"}
                name="userName"
              />
            </View>
            <View style={{ marginBottom: 15 }}>
              <InputContainer
                control={control}
                errors={errors}
                label="Password"
                placeholder={"Enter Password"}
                name="password"
              />
            </View>
            <Pressable onPress={forgetPasswordClick}>
              <Text
                style={{
                  textAlign: "right",
                  color: "blue",
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
              >
                Forgot Password?
              </Text>
            </Pressable>
            <Pressable
              onPress={handleSubmit(onSubmit)}
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
                Login
              </Text>
            </Pressable>
            <Text style={{ textAlign: "center", marginTop: 15 }}>
              Don&apos;t have an account?{" "}
              <Pressable style={{ marginTop: 7 }} onPress={registerClick}>
                <Text
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    textDecorationLine: "underline",
                  }}
                >
                  Register
                </Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginImageContainer: {
    height: 300,
    width: width,
    borderRadius: 10,
  },
  loginImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "blue",
  },
});
