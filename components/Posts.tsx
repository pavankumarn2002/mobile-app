import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Colors from '@/constants/Colors';

export default function Posts() {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
        
        <Text style={styles.postTitle}>Posts</Text>
    
    <ScrollView horizontal style={styles.mainContainer}>
      {posts.map((post:any) => (
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.subTitle}>{post.title}</Text>
          <Text style={styles.postBody}>{post.body}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
   mainContainer:{
    flexDirection:'row',
   },
   postTitle:{
      fontSize:24,
      fontWeight:'700'
   },
   postContainer:{
    flexDirection:'column',
    backgroundColor:Colors.white,
    width:200,marginRight:20,
    padding:10,borderRadius:5
   },
   subTitle:{
    fontSize:14,
    fontWeight:'700'
   },
   postBody:{}
});
