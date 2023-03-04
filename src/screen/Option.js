import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

const Option = ({navigation}) => {
  const text = 'This Fonctionnality is not available for this moment';

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  text: {
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
