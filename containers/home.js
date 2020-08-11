import React from 'react';
import history from '../../History';
import { GiDandelionFlower } from 'react-icons/gi';
import greenImg from '../assets/greenHomepagenarrow.png';
import yellowImg from '../assets/yellowHomepagenarrow.png';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


function Home({ shouldWater }) {
  return (
    <View style={styles.home}>
      <View style={!shouldWater ? styles.homeGreen : styles.homeYellow}>
        <Text style={!shouldWater ? styles.homeTitleGreen : styles.homeTitleYellow}>
          <Text style={styles.title_text}>Aloe there! </Text>
          <GiDandelionFlower size={32} />
        </Text>
        {!shouldWater ? (
          <Text style={styles.home_subtitle}>
            All your plants are watered and happy!
          </Text>
        ) : (
          <Text style={styles.home_subtitle}>Your plants need love (and water)!</Text>
        )}
        <Button
          style={!shouldWater ? styles.button_green : styles.button_yellow}
          type="button"
          onPress={() => history.push('/myplants')}
        >
          Check on them
        </Button>
        <Button
          style={!shouldWater ? styles.button_green : styles.button_yellow}
          type="button"
          onPress={() => history.push('/plants')}
        >
          Find your next plant
        </Button>
        <Image
          src={!shouldWater ? greenImg : yellowImg}
          alt="intro img"
          style={styles.home_img}
        />
        <Text style={!shouldWater ? styles.home_quote_green : styles.home_quote_yellow}>
          <Text style={!shouldWater ? styles.quote_green : styles.quote_yellow}>
            &ldquo;
          </Text>
          Like people, plants respond to extra attention.
          <Text style={!shouldWater ? styles.quote_green : styles.quote_yellow}>
            &rdquo;
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: "1",
    marginTop: "2%",
    marginBottom: "4%",
    backgroundImage: "url('../../assets/greenHomepage-desktop.png')",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover"
  },

  homeGreen: {
    flex: "1",
    flexDirection: 'column',
    justifyContent: 'center'
  },

  homeYellow: {
    flex: "1",
    flexDirection: 'column',
    justifyContent: 'center'
  },

  homeTitleGreen: {
    paddingTop: '0px',
    color: '#00BFA6',
    verticalAlign: 'middle',
    marginBottom: '2px',
    paddingBottom: '0px',
    textAlign: 'center'
  },

  homeTitleYellow: {
    paddingTop: '0px',
    color: '##F9A826',
    verticalAlign: 'middle',
    marginBottom: '2px',
    paddingBottom: '0px',
    textAlign: 'center'
  },


  title_text: {
    color: 'black'
  },
  
  home_subtitle: {
    padding: '1%',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',
  },
  
  button: {
    display: 'inline-block',
    border: 'none',
    padding: '0.5rem 1rem',
    textDecoration: 'none', 
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: '3px',
  },
  
  button_green: {
    margin: '0% 25% 2% 25%',  
    background: '#00BFA6',
    color: '#ffffff'
  },

  
  button_yellow: {
    margin: 0% 25% 2% 25%,
    background: #F9A826,
    color: #ffffff,
  },
    
  home_img: {
    width: '100%'
  },

  home_quote_green: {
    fontSize: '20px',
    textAlign: 'center',
    margin: '1% 5%',
    border: '0.5px solid #00BFA6',
  },
  
  home_quote_yellow: {
    fontSize: '20px',
    textAlign: 'center',  
    margin: '1% 5%',
    border: '0.5px solid #F9A826',
  },
 
  quote_green: {
    color: '#00BFA6',
  },
  
  quote_yellow: {
    color: '#F9A826'
  }
})