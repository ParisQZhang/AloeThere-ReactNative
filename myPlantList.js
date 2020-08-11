import React from 'react';
import { Text, View } from 'react-native';

function MyPlantList({
  myPlants,
  updateMyPlant,
  getMyPlants,
  updatePlantStatus,
  shouldWater,
  deleteMyPlant,
  modalIsOpen,
  openModal,
  closeModal,
}) {
  return (
    <View>
      {myPlants
        .sort((a, b) => new Date(a.lastWatered) - new Date(b.lastWatered))
        .map((myPlant) => (
          <MyPlantItem
            key={myPlant._id}
            myPlant={myPlant}
            updateMyPlant={updateMyPlant}
            getMyPlants={getMyPlants}
            updatePlantStatus={updatePlantStatus}
            shouldWater={shouldWater}
            deleteMyPlant={deleteMyPlant}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        ))}
    </View>
  );
}

export default MyPlantList;