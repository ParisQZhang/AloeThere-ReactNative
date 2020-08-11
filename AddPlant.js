import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const AddPlant = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 100,
    },
  });
  return (
    <View style={styles.container}>
      <Button
        title="All plants"
        onPress={() => navigation.navigate('AllPlants')}
      />
    </View>
  );
};

export default AddPlant;
