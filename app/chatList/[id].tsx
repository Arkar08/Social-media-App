import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileImage = require("@/assets/images/boy.jpg");
const width = Dimensions.get("window").width - 10;

const ChatDetailScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const chatId = params.id;

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [imageList, setImageList] = useState<string[]>([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // useEffect(() => {
  //   if (!permission) return;
  //   if (!permission.granted) requestPermission();
  // }, [permission, requestPermission]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageList([...imageList,result.assets[0].uri]);
    }
  };

  const openCamera = async () => {
     if (!permission) return;
    if (!permission?.granted) {
      await requestPermission();
      return;
    }
    setIsCameraOpen(true);
  };

  const closeCamera = () => setIsCameraOpen(false);

  const switchCamera = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    console.log('hello')
  };

  const backToChat = () => router.back();

  if (isCameraOpen) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CameraView style={{ flex: 1 }} facing={facing}>
          <View style={styles.cameraControls}>
            <TouchableOpacity onPress={switchCamera}>
              <Ionicons name="camera-reverse-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <FontAwesome6 name="circle" size={70} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeCamera}>
              <AntDesign name="close-circle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </CameraView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.headerContainer}>
          <View style={styles.backHeaderContainer}>
            <Pressable onPress={backToChat}>
              <FontAwesome6 name="arrow-left" size={24} color="black" />
            </Pressable>
            <Image source={profileImage} style={styles.avatar} />
            <Text style={styles.headerText}>Arkar {chatId}</Text>
          </View>
          <FontAwesome6 name="circle-info" size={24} color="black" />
        </View>

        <View
          style={isKeyboardVisible ? styles.bottomList : styles.bottomContainer}
        >
          <TouchableOpacity onPress={openCamera}>
            <AntDesign name="camera" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImage}>
            <FontAwesome name="photo" size={28} color="black" />
          </TouchableOpacity>
          <FontAwesome name="microphone" size={24} color="black" />
          <TextInput placeholder="Aa" style={styles.inputBox} />
          <Pressable>
            <Ionicons name="send" size={24} color="blue" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
  },
  backHeaderContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginLeft: 20,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 8,
    left: 5,
    height: 60,
    width: width,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "space-around",
    backgroundColor: "#f9f7f7ff",
  },
  bottomList: {
    position: "absolute",
    bottom: 310,
    left: 5,
    height: 60,
    width: width,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "space-around",
    backgroundColor: "#f9f7f7ff",
  },
  inputBox: {
    borderWidth: 1,
    width: 180,
    borderRadius: 30,
    paddingHorizontal: 15,
    color:'black'
  },
  cameraControls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
