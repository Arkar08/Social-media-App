import BlogCard from "@/components/BlogCard";
import { socialList } from "@/utils/dummy";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const height = Dimensions.get('window').height - 230;

const HomeScreen = () => {


  const router = useRouter()
  const addPost = () => {
    router.push('/createPost')
  }

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#f9f7f7ff' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>TuTu Social</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={addPost}>
        <Text style={styles.buttonText}>Add Post Something...</Text>
      </TouchableOpacity>
      <View style={styles.blog}>
        <FlatList
          data={socialList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <BlogCard item={item.item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "blue",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#D9D9D9",
    width: "96%",
    height: 50,
    paddingHorizontal: 20,
    marginHorizontal: "auto",
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 2,
  },
  blog: {
    height: height,
    marginTop: 10,
    marginBottom: 20,
  },
});
