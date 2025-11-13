import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const profileImage = require('@/assets/images/boy.jpg')

const ProfileCard = () => {
  return (
   <View>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.avatar}/>
        </View>
        <Text style={styles.profileText}>ProfileCard</Text>
   </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        width:80,
        height:80,
        borderRadius:50
    },
    avatar:{
        width:80,
        height:80,
        borderRadius:50
    },
    profileText:{
        textAlign:'center',
        fontWeight:'bold'
    }
})