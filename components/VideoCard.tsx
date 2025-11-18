// VideoCard.tsx
import { VideoCardType } from '@/utils/constant';
import { VideoView, useVideoPlayer } from 'expo-video';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const VideoCard = ({ uri, isActive }:VideoCardType) => {

  const player = useVideoPlayer(uri, (player) => {
    player.loop = true;
    player.muted = true;
  });


  return (
    <View style={styles.videoContainer}>
      <VideoView
        player={player}
        allowsPictureInPicture={false}
        contentFit="cover"
        style={styles.video}
        nativeControls={false}
      />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  videoContainer: {
    width,
    height,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width,
    height,
  },
});
