import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import image from '../img/citation.jpeg';
import image1 from '../img/hand-ask.png';
import image2 from '../img/cute-cartoon-muslim.jpg';
import image3 from '../img/istockphoto.jpg';
import image4 from '../img/beach-wedding-vector.jpg';

const Head = () => {
  return (
    <View style={styles.content}>
      <View style={styles.head}>
        <Image style={styles.img} source={image} />

        {/* <Text>Initie un processus de Dot</Text> */}
      </View>
    </View>
  );
};

// const Content = ({navigation}) => {
//   const border = {borderRadius: 20};
//   return (
//     <View style={styles.content}>
//       <View style={styles.block}>
//         <ImageBackground
//           style={styles.card}
//           resizeMode="cover"
//           imageStyle={border}
//           source={image1}>
//           <Text
//             style={styles.textCard}
//             onPress={() => navigation.navigate('Description')}>
//             What is a dowry?
//           </Text>
//         </ImageBackground>

//         <ImageBackground
//           style={styles.card}
//           resizeMode="cover"
//           imageStyle={border}
//           source={image2}>
//           <Text style={styles.textCard}>How does a dowry take place?</Text>
//         </ImageBackground>
//       </View>

//       <View style={styles.block}>
//         <ImageBackground
//           style={styles.card}
//           resizeMode="cover"
//           imageStyle={border}
//           source={image3}>
//           <Text style={styles.textCard}>
//             Calculate the dowry of your future wife
//           </Text>
//         </ImageBackground>

//         <ImageBackground
//           style={styles.card}
//           resizeMode="cover"
//           imageStyle={border}
//           source={image4}>
//           <Text style={styles.textCard}>Initiate a dowry process</Text>
//         </ImageBackground>
//       </View>
//     </View>
//   );
// };

const Home = ({navigation}) => {
  const border = {borderRadius: 20};
  return (
    <ScrollView styles={styles.page}>
      <Head />

      {/* <Content navigation={navigation} /> */}
      <View>
        <View style={styles.block}>
          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            imageStyle={border}
            source={image1}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Description')}>
              <Text style={styles.textCard}>What is a dowry?</Text>
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground
            style={styles.cardImage}
            imageStyle={border}
            resizeMode="cover"
            source={image2}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Tribes')}>
              <Text style={styles.textCard}>How does a dowry take place?</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.block}>
          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            imageStyle={border}
            source={image3}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Calculate')}>
              <Text style={styles.textCard}>
                Calculate the dowry of your future wife
              </Text>
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            imageStyle={border}
            source={image4}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Tribes')}>
              <Text style={styles.textCard}>Initiate a dowry process</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F3F3F3',
  },

  head: {
    height: 200,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 20,
  },

  img: {
    height: 200,
    width: '100%',
    borderRadius: 20,
  },

  content: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    // backgroundColor: 'white',
  },

  bulle: {
    flex: 1,
    height: 20,
    width: 20,
    backgroundColor: '#B47860',
    borderRadius: 10,
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    maxWidth: 200,
    // minHeight: 175,
    height: 160,
    backgroundColor: 'rgba(120, 122, 116, 0.55)',
    borderRadius: 20,
    padding: 5,
  },

  cardImage: {
    width: 160,
    maxWidth: 200,
    // minHeight: 175,
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 6,
    backgroundColor: 'gray',
  },

  textCard: {
    padding: 5,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },

  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    // marginHorizontal: 3,
  },
});
