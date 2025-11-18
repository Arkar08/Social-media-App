import { BlogListType } from "@/utils/constant";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BlogCard = ({ item, followRef }: BlogListType) => {
  const [following, setFollowing] = useState(false);
  const clickFollow = () => {
    setFollowing(!following);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.profileCOntainer}>
          <Image source={item.profileImage} style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.username}>{item.profileName}</Text>
            <Text style={styles.time}>{item.uploadTime}</Text>
          </View>
        </View>
        {!followRef && (
          <View>
            <TouchableOpacity style={styles.followButton} onPress={clickFollow}>
              <Text>{following ? "Following" : "Follow"}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Text style={styles.caption}>{item.uploadText}</Text>

      <Image
        source={item.postImage}
        style={styles.postImage}
        resizeMode="cover"
      />

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={22} color="#475569" />
          <Text style={styles.actionText}>{item.postLike}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color="#475569" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={22} color="#475569" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 5,
    width: "94%",
    alignSelf: "center",
    overflow: "hidden",

    // shadow for both platforms
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  profileCOntainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  headerText: {
    marginLeft: 10,
  },

  username: {
    fontWeight: "700",
    fontSize: 15,
    color: "#0F172A",
  },

  time: {
    fontSize: 12,
    color: "#64748B",
  },

  caption: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
  },

  postImage: {
    width: "100%",
    height: 220,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  actionText: {
    fontSize: 13,
    color: "#475569",
  },
  followButton: {
    padding: 10,
    borderRadius: 10,
    boxShadow: '0px 4px 6px #29292929',
    backgroundColor: '#e7e6e6ff'
  },
});
