import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name="index" options={{
            title:"Home",
            tabBarIcon:({color,focused})=> <Ionicons name={focused ? "home":'home-outline'} size={24} color={focused?'blue':''} />
        }}/>
        <Tabs.Screen name="video" options={{
            title:"Video",
            tabBarIcon:({color,focused})=> <Ionicons name={focused? "videocam":'videocam-outline'} size={24} color={focused?'blue':''} />
        }}/>
        <Tabs.Screen name="chat" options={{
            title:"Chat",
            tabBarIcon:({color,focused})=> <Ionicons name={focused?"chatbox":'chatbox-outline'} size={24} color={focused?'blue':''} />
        }}/>
        <Tabs.Screen name="following" options={{
            title:"Following",
            tabBarIcon:({color,focused})=> <MaterialCommunityIcons name={focused?"account-group":'account-group-outline'} size={24} color={focused?'blue':''} />
        }}/>
        <Tabs.Screen name="profile" options={{
            title:"Profile",
            tabBarIcon:({color,focused})=> <Ionicons name={focused?"person":'person-outline'} size={24} color={focused?'blue':''} />
        }}/>
    </Tabs>
  )
}

export default TabLayout;