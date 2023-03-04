/* eslint-disable no-alert */
import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Navigation = ({name}) => {
  const text = 'This Fonctionnality is not available for this moment';

  return (
    <View style={styles.header}>
      <TouchableOpacity
        // style={styles.padding}
        onPress={() => {
          alert(text);
        }}>
        <Ionicons name="menu-outline" size={30} color="white" />
      </TouchableOpacity>

      <Text style={styles.text}>{name}</Text>

      <TouchableOpacity
        // style={styles.padding}
        onPress={() => {
          alert(text);
        }}>
        {/* <Ionicons name="gear" size={30} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#822B3C',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  padding: {
    padding: 10,
  },

  text: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
  },
});

export default Navigation;
