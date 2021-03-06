import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyPlantList from "./myPlantList";

// const MyPlant = () => {
//   return <Text>MyPlant</Text>;
// };

function MyPlants({
  myPlants,
  getMyPlants,
  updateMyPlant,
  updatePlantStatus,
  shouldWater,
  deleteMyPlant,
  modalIsOpen,
  openModal,
  closeModal,
}) {
  return (
    <View>
      {myPlants ? (
        <View>
          <Text>Welcome back to your plant farm!</Text>
          <Text>Check the watering schedule</Text>
          <MyPlantList
            myPlants={myPlants}
            updateMyPlant={updateMyPlant}
            getMyPlants={getMyPlants}
            updatePlantStatus={updatePlantStatus}
            shouldWater={shouldWater}
            deleteMyPlant={deleteMyPlant}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
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
