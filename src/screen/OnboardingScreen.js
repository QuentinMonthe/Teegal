import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
  <TouchableOpacity {...props}>
    <Text style={{fontSize: 16, marginHorizontal: 20, color: 'white'}}>
      Done
    </Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      //To handle the navigation to the Homepage if Skip is clicked
      onSkip={() => navigation.replace('HomeTab')}
      //To handle the navigation to the Homepage after Done is clicked
      onDone={() => navigation.replace('HomeTab')}
      DoneButtonComponent={Done}
      bottomBarHighlight={false}
      controlStatusBar={true}
      pages={[
        {
          backgroundColor: '#822B3C',
          image: (
            <Image
              source={require('../img/onboarding.png')}
              style={{height: 360, width: 360}}
            />
          ),
          title: 'Welcome to Teegal',
          subtitle:
            'Your application to learn all about the process of a dowry, as well as its value. ',
        },
        {
          backgroundColor: '#822B3C',
          image: (
            <Image
              source={require('../img/onboarding.png')}
              style={{height: 360, width: 360}}
            />
          ),
          title: 'Explore',
          subtitle:
            "Explore the dowry process in African tribes. And get closer to your future wife's cultural roots before taking the plunge.",
        },
        {
          backgroundColor: '#822B3C',
          image: (
            <Image
              source={require('../img/onboarding.png')}
              style={{height: 360, width: 360}}
            />
          ),
          title: 'All Done',
          subtitle:
            'You feel ready, calculate the dowry of your wife, and prepare yourself accordingly.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
