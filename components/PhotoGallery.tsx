import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading photos.</Text>;

  return (
    <View style={{}}>
           <Text style={styles.postTitle}>Photo Gallery</Text>
    
    <ScrollView horizontal>
      {photos.slice(0, 20).map((photo:any) => (
        <View key={photo.id} style={styles.galleryContainer}>
          <Image source={photo.thumbnailUrl} alt={photo.title} style={styles.image} />
          <Text style={styles.innerText}>{photo.title}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

export default PhotoGallery;
const styles=StyleSheet.create({
       postTitle:{
          fontSize:24,
          fontWeight:'700',
          color:Colors.primaryColor,
       },
       galleryContainer:{
        width:250,padding:20,marginRight:25,backgroundColor:Colors.white,flex:1,justifyContent:'center',alignItems:'center'
       },
       image:{
        width:200,height:200
       },
       innerText:{
         textAlign:'center'
       }
})