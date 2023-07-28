import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RefreshButton = ({ onPress, textColor }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.refreshButton}>
        <Text style={[styles.refreshButtonText, { color: textColor }]}>Refresh</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  refreshButton: {
    marginRight: 10,
    paddingHorizontal: 10,
  },
  refreshButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RefreshButton;
