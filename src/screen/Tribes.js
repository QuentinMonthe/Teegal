import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const Items = ({item, navigation}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.element}
        onPress={() =>
          navigation.navigate('StepsDowry', {
            tribeId: item.id,
            title: item.title,
          })
        }>
        <Image style={styles.img} source={item.src} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Tribes = ({navigation}) => {
  const renderItem = ({item}) => <Items item={item} navigation={navigation} />;
  const dataSource = useSelector(state => state.tribe);

  return (
    <SafeAreaView style={[styles.page, styles.container]}>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Tribes;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F3F3F3',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: 110,
    borderRadius: 10,
    marginBottom: 5,
  },

  element: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 8,
  },

  title: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
});
