import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={styles.text}>profile</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  text:{
    color:'red'
  }
})