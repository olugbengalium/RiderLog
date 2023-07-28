import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostDetailScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postBody}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  postBody: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'justify'
  },
});

export default PostDetailScreen;
