import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      margin: '5%',
      padding: 25,
      display: 'flex',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    textContainer: {
      alignItems: 'center',
      padding: 20,
      display: 'flex',
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
        <Image
          source={{ url: item.plantInfo.imgUrl }}
          style={styles.image}
        ></Image>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.nickName}</Text>
          <Text style={styles.subTitle}>{item.commonName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
