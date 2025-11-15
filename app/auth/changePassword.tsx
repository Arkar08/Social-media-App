import InputContainer from "@/components/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const forgetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ChangePasswordScreen = () => {
  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: z.infer<typeof forgetPasswordSchema>) => {
    console.log(data);
    reset({
      newPassword: "",
      confirmPassword: "",
    });
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Change Password</Text>
      <View style={{ padding: 20, marginTop: 20 }}>
        <View style={{ marginBottom: 15 }}>
          <InputContainer
            control={control}
            errors={errors}
            name="newPassword"
            label="New Password"
            placeholder="Enter your new password"
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <InputContainer
            control={control}
            errors={errors}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your new password"
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
            Change Password
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "blue",
  },
});
