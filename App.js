import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';
import HomeScreen from './HomeScreen';
import AllPlants from './AllPlants';
import ApiService from './ApiService.js';
import { Ionicons } from '@expo/vector-icons';
import Notifications from './timeNotification';
import MyPlants from './MyPlants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [shouldWater, setShouldWater] = useState(false);
  const [loading, setLoading] = useState(true);

  const shouldIWater = () => {
    return myPlants.some((myPlant) => {
      console.log(myPlant)
      const interval = myPlant.plantInfo.water.split(' ')[0];
      const new_date = moment(myPlant.lastWatered).add(interval, 'days');
      const current = moment();
      const diff = new_date.diff(current, 'days') + 1;
      setLoading(false);
      return diff < 0 ? true : false;
    });
  };
  Notifications();
  useEffect(() => {
    let waterOrNot = shouldIWater();
    getMyPlants();
    ApiService.getPlants().then((allPlants) => {
      setPlants(allPlants);
    });
    setShouldWater(waterOrNot);
  }, []);

  useEffect(() => {
    let waterOrNot = shouldIWater();
    setShouldWater(waterOrNot);
  }, [myPlants]);

  const getMyPlants = () => {
    ApiService.getMyPlants().then((data) => {
      console.log('data', myPlants.length);
      setMyPlants((myPlants) => {
        console.log('myPlants', myPlants.length);
        return [...data];
      });
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'All Plants') {
              iconName = 'ios-list';
            } else if (route.name === 'My Plants') {
              iconName = 'ios-leaf';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen name="All Plants">
          {(props) => (
            <AllPlants {...props} shouldIWater={shouldIWater} plants={plants} />
          )}
        </Tab.Screen>
        <Tab.Screen name="My Plants">
          {(props) => (
            <MyPlants
              {...props}
              myPlants={myPlants}
              shouldWater={shouldWater}
              getMyPlants={getMyPlants}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
