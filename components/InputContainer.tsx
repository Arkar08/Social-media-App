import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Controller } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";

const InputContainer = ({ control, errors, placeholder, name, label,changeEyeIcon,setChangeEyeIcon }: any) => {
  return (
    <View>
      <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: "500" }}>
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{position: 'relative'}}>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                keyboardType={name === "email" ? "email-address" : name === "phoneNumber" ? "phone-pad" : "default"}
                secureTextEntry={name === "password" || name === 'newPassword' || name === 'confirmPassword' ? changeEyeIcon : false}
                style={{
                  backgroundColor: "#fbf7f7ee",
                  padding: 15,
                  borderRadius: 5,
                }}
              />
              {
                (name === "password" || name === 'newPassword' || name === 'confirmPassword') && (
                  <Pressable style={{position: 'absolute', right: 10, top: 10}} onPress={()=>setChangeEyeIcon(!changeEyeIcon)}>
                    <Ionicons
                      name={changeEyeIcon ? "eye-off-outline" : "eye-outline"} size={24} color={'black'}/>
                  </Pressable>
                )
              }
          </View>
        )}
      />
      {errors[name] && (
        <Text style={{ color: "red", marginTop: 5 }}>
          {errors[name].message}.
        </Text>
      )}
    </View>
  );
};

export default InputContainer;
