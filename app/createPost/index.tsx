import { socialList } from "@/utils/dummy";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
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
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileImage = require("@/assets/images/boy.jpg");
const { width } = Dimensions.get("window");

const CreatePostScreen = () => {
  const router = useRouter();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [imageList, setImageList] = useState("");
  const [inputText, setInputText] = useState("");
  const [social, setSocial] = useState(socialList);

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

  const BackToHome = () => {
    router.back();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageList(result.assets[0].uri);
    }
  };

  const inputChange = (text: string) => {
    setInputText(text);
  };

  const createPost = () => {
    const data = {
      profileImage: require("@/assets/images/boy.jpg"),
      profileName: "Arkar",
      uploadTime: "2 hour ago",
      uploadText: inputText,
      postImage: imageList,
      postLike: 0,
      comments: 0,
    };
    if (data) {
      setSocial((prev) => [
        ...prev,
        { ...data, id: (prev.length + 1).toString() },
      ]);
      setKeyboardVisible(false)
      setInputText("");
      setImageList("");
    }
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.headerContainer}>
          <View style={styles.createContainer}>
            <Pressable onPress={BackToHome}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
            <Text style={styles.headerText}>Create post</Text>
          </View>
          <Pressable style={styles.postBtn} onPress={createPost}>
            <Text style={styles.postText}>Post</Text>
          </Pressable>
        </View>

        <View style={styles.header}>
          <Image source={profileImage} style={styles.avatar} />
          <Text style={styles.username}>Arkar</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Something Write Post"
            multiline={true}
            autoFocus={true}
            style={styles.inputBox}
            onChangeText={inputChange}
          />
          {imageList && (
            <Image source={{ uri: imageList }} style={styles.image} />
          )}
        </View>
        <Pressable
          style={isKeyboardVisible ? styles.photoList : styles.photoContainer}
          onPress={pickImage}
        >
          <MaterialIcons name="photo-library" size={42} color="green" />
          <Text style={styles.photoText}>Photo and video</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: "gray",
  },
  createContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
  },
  postBtn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  postText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
    marginTop: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  username: {
    fontWeight: "500",
    fontSize: 22,
    color: "#0F172A",
    letterSpacing: 2,
  },
  inputContainer: {
    padding: 10,
    flex: 1,
  },
  inputBox: {
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  photoContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    zIndex:1
  },
  photoList: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    bottom: 330,
    left: 10,
    zIndex:1
  },
  photoText: {
    fontSize: 14,
    fontWeight: "500",
  },
  image: {
    width: width - 20,
    height: 400,
    marginTop: 10,
  },
});
