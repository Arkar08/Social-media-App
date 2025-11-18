import { ChatListItemType } from "@/utils/constant";
import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("window").width - 20;

const ChatListItem = ({item,goTochatHistory}:ChatListItemType) => {
  return (
    <Pressable style={styles.chatListContainer} onPress={()=>goTochatHistory(item.id)}>
      <Image source={item.profileImage} style={styles.avatar} />
      <View>
        <Text style={styles.text}>{item.profileName}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.bodyText} numberOfLines={1}
            ellipsizeMode="tail">{item.message}</Text>
          <Text style={styles.timeLine}>{item.timeLine}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  chatListContainer: {
    width: width,
    height: 80,
    marginHorizontal: "auto",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    flexDirection:'row',
    gap:12,
    marginTop:5
  },
  text: {
    color: "red",
    fontWeight:'bold',
    fontSize:18
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
   bodyText: {
    fontSize: 16,
    color: '#000',
    width: 220, 
  },
  timeLine: {
    fontSize: 16,
    color: 'gray',
  },
});
