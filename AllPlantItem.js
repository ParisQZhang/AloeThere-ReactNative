import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const ListItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      margin: '5%',
      width: 350,
      padding: 10,
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

    subTitle: {
      flex: 1,
      paddingBottom: 20,
      flexWrap: 'wrap',
      padding: 30,
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
        <Image source={{ url: item.imgUrl }} style={styles.image}></Image>
        <Text style={styles.subTitle}>{item.commonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
