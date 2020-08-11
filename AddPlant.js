import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const AddPlant = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="My plants"
        onPress={() => navigation.navigate('MyPlants')}
      />
    </View>
  );
};

export default AddPlant;
