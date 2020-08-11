import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';

function MyPlantList({ myPlants }) {
  myPlants = myPlants.sort(
    (a, b) => new Date(a.lastWatered) - new Date(b.lastWatered)
  );

  return (
    <View>
      <FlatList
        data={myPlants}
        renderItem={({ item }) => <ListItem item={item} />}
      ></FlatList>
    </View>
  );
}

export default MyPlantList;
