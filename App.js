import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MyPlantsScreen from './MyPlantsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [shouldWater, setShouldWater] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const shouldIWater = () => {
    return myPlants.some((myPlant) => {
      const interval = myPlant.plantInfo.water.split(' ')[0];
      const new_date = moment(myPlant.lastWatered).add(interval, 'days');
      const current = moment();
      const diff = new_date.diff(current, 'days') + 1;
      setLoading(false);
      return diff < 0 ? true : false;
    });
  };
  // usePushNotifications();

  // useEffect(() => {
  //   getMyPlants();
  //   setShouldWater(shouldIWater());
  // }, []);

  // useEffect(() => {
  //   setShouldWater(shouldIWater());
  // }, [myPlants]);

  const getMyPlants = () => {
    ApiService.getMyPlants().then((data) => {
      setMyPlants(data);
    });
  };

  const createMyPlant = (nickName, bought, lastWatered, commonName, id) => {
    let data = { nickName, bought, lastWatered, commonName, id };
    ApiService.postMyPlant(data).then((newPlant) => {
      const newPlants = [...myPlants, newPlant];
      setMyPlants(newPlants);
    });
  };

  const filterPlants = (
    difficulty,
    type,
    light,
    water,
    humidity,
    airPurifying
  ) => {
    ApiService.getFilterPlants(
      difficulty,
      type,
      light,
      water,
      humidity,
      airPurifying
    ).then((data) => {
      if (data && data.length !== 0) setPlants(data);
      else alert("Sorry, we can't find a matching plant");
    });
  };

  const updateMyPlant = (id, lastWatered) => {
    let data = { id, lastWatered };
    ApiService.editMyPlant(data).then(() => {
      const newPlants = myPlants.map((myPlant) => {
        if (myPlant._id === id) {
          return { ...myPlant, lastWatered };
        }
        return myPlant;
      });
      setMyPlants(newPlants);
    });
  };

  const emptyFilter = () => {
    setPlants([]);
  };

  const deleteMyPlant = (id) => {
    ApiService.deleteMyPlant(id).then(() => {
      const newPlants = myPlants.filter((myPlant) => {
        if (myPlant._id !== id) {
          return myPlant;
        }
      });
      setMyPlants(newPlants);
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="My-Plants" component={MyPlantsScreen}
        myPlants={myPlants}
        shouldWater={shouldWater}
        getMyPlants={getMyPlants}
        updateMyPlant={updateMyPlant}
        deleteMyPlant={deleteMyPlant}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
