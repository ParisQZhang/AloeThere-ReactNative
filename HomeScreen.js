import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
    />
    <Button
      title="My plants"
      onPress={() => navigation.navigate('My-Plants')}
    />
    </View>
  );
  
};

export default HomeScreen;
