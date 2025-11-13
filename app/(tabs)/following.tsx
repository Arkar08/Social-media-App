import BlogCard from "@/components/BlogCard";
import ProfileCard from "@/components/ProfileCard";
import { socialList } from "@/utils/dummy";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useRef } from "react";
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const height = Dimensions.get('window').height - 320;
const dummyHeight = Dimensions.get('window').height;

const FollowingScreen = () => {

  const followStatus = useRef(null)

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'blue' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Followings</Text>
      </View>
      <View style={styles.middle}>
        <View style={{ height: 130, paddingHorizontal: 15 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10, gap: 16 }}
        >
          <View>
            <View style={styles.plusContainer}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <Text style={styles.profileText}>Add Following</Text>
          </View>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </ScrollView>
        </View>
        <View style={styles.blog}>
          <FlatList
            data={socialList}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => <BlogCard item={item.item} followRef={followStatus}/>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    zIndex: 1,
    backgroundColor:'blue'
  },
  headerText: {
    fontSize: 28,
    fontWeight: "500",
    color:'white'
  },
  plusContainer: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    marginTop:10,
    textAlign: "center",
    fontWeight: "bold",
  },
   blog: {
    height: height,
    marginTop: 10,
    marginBottom: 20,
  },
  middle:{
    height:dummyHeight,
    backgroundColor:'#f9f7f7ff'
  }
});
