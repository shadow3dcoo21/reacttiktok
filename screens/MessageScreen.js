import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const VideoUploadForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    if (!result.canceled) {
      setVideo(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    if (!video) {
      alert('Please select a video first.');
      return;
    }

    try {
      const { data } = await axios.post('http://18.216.174.72:3000/api/create-upload', {
        name,
        description,
      });

      const videoData = new FormData();
      videoData.append('file_data', {
        uri: video.uri,
        type: 'video/mp4',
        name: `video-${Date.now()}.mp4`,
      });

      const uploadResponse = await axios({
        method: 'PUT',
        url: data.uploadLink,
        data: videoData,
        headers: {
          'Content-Type': 'video/mp4', // Ajusta el tipo de contenido según sea necesario
          'Tus-Resumable': '1.0.0',
          'Upload-Offset': 0, // Esto podría necesitar ser configurado dinámicamente si se reanuda
          'Authorization': `Bearer ${data.accessToken}`, // Asumiendo que devolvemos un token de acceso desde el backend
        },
      });

      console.log('Upload response:', uploadResponse.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <TouchableOpacity style={styles.button} onPress={pickVideo}>
        <Text style={styles.buttonText}>Pick a Video</Text>
      </TouchableOpacity>

      <Button title="Upload" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default VideoUploadForm;
