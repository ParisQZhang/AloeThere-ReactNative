import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      backgroundColor: 'white',
      margin: '5%',
      padding: 25,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },

    title: {
      paddingBottom: 20,
      fontWeight: 'bold',
      fontSize: 25,
    },

    subTitle: {
      paddingBottom: 20,
      fontSize: 18,
    },

    image: {
      width: 150,
      height: 150,
      borderRadius: 150,
      resizeMode: 'contain',
    },
  });
  return (
    <TouchableOpacity key={item._id}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.nickName}</Text>
        <Text style={styles.subTitle}>{item.commonName}</Text>
        <Image
          source={{ url: item.plantInfo.imgUrl }}
          style={styles.image}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
