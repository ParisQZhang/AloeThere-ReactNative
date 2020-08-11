import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AllPlantItem from './AllPlantItem';

function AllPlants({ plants, shouldWater }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 40,
    },
    title: {
      paddingBottom: 10,
      fontWeight: 'bold',
      fontSize: 22,
    },
    paraText: {
      paddingBottom: 20,
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>All Plants</Text>
        <FlatList
          data={plants}
          renderItem={({ item }) => <AllPlantItem item={item} />}
        ></FlatList>
      </View>
    </View>
  );
}

export default AllPlants;
