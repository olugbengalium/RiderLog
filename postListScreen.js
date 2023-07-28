import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import axios from 'axios';
import RefreshButton from './refreshButton';

const PAGE_SIZE = 10;

const PostListScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (page = 1) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PAGE_SIZE}`);
      const newPosts = response.data;
      setPosts((prevPosts) => (page === 1 ? newPosts : [...prevPosts, ...newPosts]));
      setIsLoading(false);
      setIsRefreshing(false);
      setIsEndReached(newPosts.length < PAGE_SIZE); // Check if the last page is reached
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Error fetching posts. Please try again later.');
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handlePostPress = (post) => {
    navigation.navigate('PostDetail', { post });
  };

  const handleRefresh = () => {
    setError(null);
    setIsRefreshing(true);
    setCurrentPage(1);
    fetchPosts(1);
  };

  const handleEndReached = () => {
    if (!isEndReached) {
      setCurrentPage((prevPage) => prevPage + 1);
      fetchPosts(currentPage + 1);
    }
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePostPress(item)} style={styles.postItem}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </TouchableOpacity>
  );

  const renderRefreshButton = () => <RefreshButton onPress={handleRefresh} textColor="green" />;

  useEffect(() => {
    navigation.setOptions({
      headerRight: renderRefreshButton,
    });

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{}}>Hacker News!!!</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} colors={['blue']} tintColor={'blue'} />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
      {isLoading && !isRefreshing ? <ActivityIndicator size="large" style={styles.loadingIndicator} /> : null}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  postItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postBody: {
    marginTop: 5,
    fontSize: 14,
  },
  refreshButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  refreshButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingIndicator: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PostListScreen;
