// VideoScreen.tsx
import VideoCard from '@/components/VideoCard';
import { videoSources } from '@/utils/dummy';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

const VideoScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 90,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Video</Text>
      </View>
      <FlatList
        data={videoSources}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <VideoCard uri={item} isActive={index === activeIndex} />
        )}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        getItemLayout={(_, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    backgroundColor: 'black',
    zIndex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#f9f7f7ff',
  },
});
