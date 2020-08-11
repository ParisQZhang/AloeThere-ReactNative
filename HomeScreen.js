import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="My plants"
        onPress={() => navigation.navigate('MyPlants')}
      />
    </View>
  );
};

export default HomeScreen;
