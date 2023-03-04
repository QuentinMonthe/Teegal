import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = ({navigation}) => {
  const data = useSelector(state => state.tribe);
  const [dataSource, setDataSource] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const text = search;
    const table = data.filter(item => item.title.search(text) !== -1);
    setDataSource(table);
  };

  useEffect(() => {}, [search]);

  return (
    <ScrollView style={styles.page}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.search}
          defaultValue={search}
          onChangeText={text => setSearch(text)}
          placeholder="Search tribes"
        />
        <TouchableOpacity style={styles.bouton} onPress={() => handleSearch()}>
          <Ionicons name="search" color="white" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {dataSource.map(tribe => (
          <TouchableOpacity
            key={tribe.id}
            style={styles.element}
            onPress={() =>
              navigation.navigate('StepsDowry', {
                tribeId: tribe.id,
                title: tribe.title,
              })
            }>
            <Text style={styles.text}>{tribe.title}</Text>
            <Ionicons name="arrow-redo-sharp" color="#822B3C" size={15} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.found}>
        {dataSource.length === 0 ? (
          <Text style={styles.textFound}>Result not found</Text>
        ) : (
          <Text>{}</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F3F3F3',
  },

  found: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textFound: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    // fontWeight: '400',
  },

  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bouton: {
    height: 45,
    borderWidth: 0.5,
    borderColor: '#822B3C',
    backgroundColor: '#822B3C',
    // borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  search: {
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderColor: 'gray',
    // borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginVertical: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 15,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  list: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  element: {
    width: '100%',
    // minHeight: 50,
    margin: 10,
    // backgroundColor: 'gray',
    // borderRadius: 10,
    borderBottomWidth: 0.5,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 15,
    color: 'black',
  },

  tribe: {
    fontSize: 15,
    color: 'black',
  },
});
