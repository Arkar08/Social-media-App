import ChatListItem from "@/components/ChatListItem";
import { chatList } from "@/utils/dummy";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const height = Dimensions.get('window').height;

const ChatScreen = () => {

  const router = useRouter()

  const goTochatHistory= (id:string) => {
    router.navigate({
      pathname:'/chatList/[id]',
      params:{id:id}
    })
  }

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'blue' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <View style={styles.chatContainer}>
          <FlatList
            data={chatList}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => <ChatListItem item={item.item} goTochatHistory={goTochatHistory}/>}
          />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

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
  chatContainer:{
    backgroundColor:'#f9f7f7ff',
    height
  }
});
