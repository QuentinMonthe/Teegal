import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Opening = ({route, navigation}) => {
  const {launch} = route.params;

  const link = launch ? 'OnboardingScreen' : 'HomeTab';

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        start={{x: 0.0, y: 0.15}}
        end={{x: 0.5, y: 1.0}}
        locations={[0.2, 0.8]}
        colors={['#822B3C', '#AD674D']}>
        <Text>{}</Text>

        <Image style={styles.img} source={require('../img/logo.png')} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(link)}>
          <Text style={styles.text}>Start Navigation</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  gradient: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    marginBottom: 40,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F1F1F1',
  },

  text: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'medium',
    letterSpacing: 0.25,
    color: 'white',
  },

  img: {
    width: 208,
    height: 54,
  },
});

export default Opening;
