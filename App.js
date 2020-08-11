import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';
import HomeScreen from './HomeScreen';
import Search from './Search';
import ApiService from './ApiService.js';
import Icon from 'react-native-vector-icons/Ionicons';
// import Notification from './Notification';
import AddPlant from './AddPlant';
import MyPlants from './MyPlants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [shouldWater, setShouldWater] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
  // usePushNotifications();
  useEffect(() => {
    let waterOrNot = shouldIWater();
    getMyPlants();
    setShouldWater(waterOrNot);
  }, []);

  useEffect(() => {
    let waterOrNot = shouldIWater();
    setShouldWater(waterOrNot);
  }, [myPlants]);

  const getMyPlants = () => {
    ApiService.getMyPlants().then((data) => {
      setMyPlants((myPlants) => [...myPlants]);
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
    /*     <Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen> */
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen name="Plants">
          {(props) => (
            <Search
              {...props}
              shouldIWater={shouldIWater}
              plants={plants}
              filterPlants={filterPlants}
              emptyFilter={emptyFilter}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="MyPlants">
          {(props) => (
            <MyPlants
              {...props}
              myPlants={myPlants}
              shouldWater={shouldWater}
              getMyPlants={getMyPlants}
              updateMyPlant={updateMyPlant}
              deleteMyPlant={deleteMyPlant}
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}
        </Tab.Screen>
        {/*   <Tab.Screen name="AddPlant">
          {(props) => (
            <AddPlant
              {...props}
              createMyPlant={createMyPlant}
              shouldWater={shouldWater}
            />
          )}
        </Tab.Screen> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
