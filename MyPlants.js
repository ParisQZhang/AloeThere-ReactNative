import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MyPlant = ({ myPlants }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{myPlants[0].commonName}</Text>
    </View>
  );
};

export default MyPlant;
