import ChatListItem from "@/components/ChatListItem";
import { chatList } from "@/utils/dummy";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {

  const router = useRouter()

  const goTochatHistory= (id:string) => {
    router.navigate({
      pathname:'/chatList/[id]',
      params:{id:id}
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <View>
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
  },
  headerText: {
    fontSize: 28,
    fontWeight: "500",
  },
});
