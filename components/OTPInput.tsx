import { OTPInputProps } from "@/utils/constant";
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";



const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onCodeFilled }) => {
  const [code, setCode] = useState<string[]>(new Array(length).fill(""));

  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newCode.join("").length === length) {
      onCodeFilled?.(newCode.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key !== "Backspace") return;

    const newCode = [...code];

    if (code[index] === "" && index > 0) {
      newCode[index - 1] = "";
      setCode(newCode);
      onCodeFilled?.(newCode.join(""));
      inputsRef.current[index - 1]?.focus();
      return;
    }

    newCode[index] = "";
    onCodeFilled?.(newCode.join(""));
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref: any) => (inputsRef.current[index] = ref)}
          style={styles.input}
          keyboardType="number-pad"
          autoFocus={index === 0}
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 20,
  },
  input: {
    width: 50,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#555",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },
});
