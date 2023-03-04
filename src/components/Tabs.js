import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import TabNaviga

const Tabs = () => {
  return (
    <View style={styles.tab}>
      <Text>Teegal V1.0</Text>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'rgba(120, 122, 116, 0.4)',
    maxHeight: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
