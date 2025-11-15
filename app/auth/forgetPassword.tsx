import InputContainer from "@/components/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const forgetPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const ForgetPasswordScreen = () => {
  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
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
      email: "",
    });
    router.push("/auth/optConfirm");
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Reset Password</Text>
      <View style={{ padding: 20, marginTop: 20 }}>
        <View>
          <InputContainer
            control={control}
            errors={errors}
            name="email"
            label="Email"
            placeholder="Enter your email"
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
            Reset Password
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "blue",
  },
});
