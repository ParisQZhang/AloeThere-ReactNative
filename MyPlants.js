import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyPlantList from './myPlantList.js';

function MyPlants({ myPlants, getMyPlants }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 100,
    },
    title: {
      paddingBottom: 20,
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
      {myPlants && myPlants.length !== 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back to your plant fam!</Text>
          <Text style={styles.paraText}>Check the watering schedule</Text>
          <MyPlantList myPlants={myPlants} getMyPlants={getMyPlants} />
        </View>
      ) : (
        <View>
          <Text>No plants found! Create a new one to get started.</Text>
        </View>
      )}
    </View>
  );
}
export default MyPlants;
