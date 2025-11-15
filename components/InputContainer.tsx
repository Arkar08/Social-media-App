import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

const InputContainer = ({ control, errors, placeholder, name, label }: any) => {
  console.log(errors);
  return (
    <View>
      <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: "500" }}>
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            style={{
              backgroundColor: "#fbf7f7ee",
              padding: 10,
              borderRadius: 5,
            }}
          />
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
