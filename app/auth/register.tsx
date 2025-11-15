import InputContainer from "@/components/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const registerSchema = z.object({
  userName: z.string().min(1, { message: "Username is required" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone Number must be at least 10 characters" }),
  email: z.string().optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const RegisterScreen = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
  });

  const router = useRouter();
  const [registerEyeIcon,setRegisterEyeIcon] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log(data);
    reset({
      userName: "",
      password: "",
      phoneNumber: "",
      email: "",
    });
    router.push("/auth/optConfirm");
  };

  const loginClick = () => {
    router.push("/auth");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.headerText}>REGISTER</Text>
      <View style={{ padding: 20, marginTop: 20 }}>
        <View style={{ marginBottom: 15 }}>
          <InputContainer
            control={control}
            errors={errors}
            label="Username"
            placeholder={"Enter Username"}
            name="userName"
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <InputContainer
            control={control}
            errors={errors}
            label="Phone Number"
            placeholder={"Enter Phone Number"}
            name="phoneNumber"
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <InputContainer
            control={control}
            errors={errors}
            label="Email (optional)"
            placeholder={"Enter Email"}
            name="email"
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <InputContainer
            control={control}
            errors={errors}
            label="Password"
            placeholder={"Enter Password"}
            name="password"
            changeEyeIcon={registerEyeIcon}
            setChangeEyeIcon={setRegisterEyeIcon}
          />
        </View>
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
            Register
          </Text>
        </Pressable>
        <Text style={{ textAlign: "center", marginTop: 15 }}>
          Already have an account?{" "}
          <Pressable style={{ marginTop: 7 }} onPress={loginClick}>
            <Text
              style={{
                color: "blue",
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Login
            </Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "blue",
  },
});
