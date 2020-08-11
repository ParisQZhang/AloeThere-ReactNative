import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import greenImg from './assets/greenHomepagenarrow.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Aloe there!</Text>
      </View>
      <Text style={styles.subTitle}>
        All your plants are watered and happy!
      </Text>
      <View style={styles.button}>
        <Button
          type="button"
          onPress={() => navigation.navigate('MyPlants')}
          title="Check on them"
        >
          <Text style={styles.buttonText}>Check on them</Text>
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          type="button"
          onPress={() => navigation.navigate('AddPlant')}
          title="Find your next plant"
        >
          Find your next plant
        </Button>
      </View>

      <Image source={greenImg} style={styles.image}></Image>
      <Text style={styles.quote}>
        "Like people, plants respond to extra attention"
      </Text>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    margin: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00BFA6',
    margin: 5,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  quote: {
    fontWeight: 'bold',
    fontSize: 18,
    borderColor: '#00BFA6',
    borderWidth: 2,
    padding: 20,
  },
});

export default HomeScreen;
