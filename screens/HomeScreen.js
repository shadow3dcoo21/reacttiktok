import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, FlatList,Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'expo-av';
import axios from 'axios';
import styles from '../style/homeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height: viewportHeight } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const watchTimer = useRef(null);


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://18.216.174.72:3000/videos');
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  
  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;
      setCurrentIndex(newIndex);
      // Reset watch time when changing videos
    }
  });

  const handleVideoPress = async (index) => {
    const video = videoRefs.current[index];
    if (video) {
      const status = await video.getStatusAsync();
      if (status.isPlaying) {
        video.pauseAsync();
      } else {
        video.playAsync();
      }
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.videoContainer}>
      
       
      <TouchableWithoutFeedback onPress={() => handleVideoPress(index)}>
        <View style={styles.videoWrapper}>
          <Video
            ref={(ref) => { videoRefs.current[index] = ref; }}
            source={{ uri: `http://18.216.174.72:3000/${item.videoUrl}` }}
            style={styles.video}
            resizeMode="cover"
            shouldPlay={currentIndex === index}
            isLooping
            useNativeControls={false}
          />
        </View>
        
      </TouchableWithoutFeedback>
      <View style={styles.informacion}>
        <View style={styles.informa_inter}>
          <Text style={styles.titulo}>{item.user}</Text>
          <Text style={styles.subtitu}>Categoria : {item.category}</Text>
        </View>
        
      </View>
    </View>
    
  );






  
  
  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          data={videos}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={viewportHeight}
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;