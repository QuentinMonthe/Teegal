import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {addDowry, calculateDowry} from '../resources/redux';

const Parameter = ({navigation}) => {
  const [tribe, setTribe] = useState('');
  const [age, setAge] = useState('');
  const [virginity, setVirginity] = useState(false);
  const [charm, setCharm] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');
  const [tint, setTint] = useState('');
  const [morphology, setMorphology] = useState('');
  const [tradition, setTradition] = useState(false);
  const [knowledge, setKnowledge] = useState(false);

  const dispatch = useDispatch();

  const tabs = useSelector(state => state.dowry);
  const data = useSelector(state => state.tribe);

  const check = () => {
    if (
      tribe !== '' &&
      age !== '' &&
      charm !== '' &&
      academicLevel !== '' &&
      tint !== '' &&
      morphology !== ''
    ) {
      const index = tabs.length + 1;

      const item = data.find(t => t.title === tribe);

      const dowry = {
        id: index,
        tribe: tribe,
        age: age,
        virginity: virginity,
        charm: charm,
        academicLevel: academicLevel,
        tint: tint,
        morphology: morphology,
        tradition: tradition,
        knowledge: knowledge,
        initial: item.unit,
      };

      dispatch(addDowry(dowry));

      dispatch(calculateDowry(index));

      navigation.navigate('Calculate', {
        init: true,
      });
    } else {
      alert('Please fill in the parameters to perform the calculation');
    }
  };

  return (
    <View>
      <View style={{flex: 1, margin: 15}}>
        <Text style={styles.text}>
          Enter the parameters of your future wife
        </Text>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Tribe</Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={tribe}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setTribe(itemValue)}>
            <Picker.Item label="None Selection" value="" />
            {data.map(item => (
              <Picker.Item
                key={item.id}
                label={item.title}
                value={item.title}
              />
            ))}
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Age</Text>
        </View>
        <TextInput
          style={styles.search}
          defaultValue={age}
          onChangeText={text => setAge(text)}
          placeholder="Enter her age"
        />
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Is she a virgin ?</Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={virginity}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setVirginity(itemValue)}>
            <Picker.Item label="Yes" value={true} />
            <Picker.Item label="No" value={false} />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Give a note of beauty</Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={charm}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setCharm(itemValue)}>
            <Picker.Item label="None Selection" value="" />
            <Picker.Item label="Not bad" value="1" />
            <Picker.Item label="Appreciable" value="2" />
            <Picker.Item label="Pretty" value="3" />
            <Picker.Item label="Very pretty" value="4" />
            <Picker.Item label="wonderful" value="5" />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Her school level</Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={academicLevel}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) =>
              setAcademicLevel(itemValue)
            }>
            <Picker.Item label="None Selection" value="" />
            <Picker.Item label="Basic" value="1" />
            <Picker.Item label="Secondary school" value="2" />
            <Picker.Item label="University" value="3" />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Her skin tone</Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={tint}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setTint(itemValue)}>
            <Picker.Item label="None Selection" value="" />
            <Picker.Item label="Black skin tone" value="1" />
            <Picker.Item label="Brown skin" value="2" />
            <Picker.Item label="Mixed skin" value="3" />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>Her morphology</Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={morphology}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setMorphology(itemValue)}>
            <Picker.Item label="None Selection" value="" />
            <Picker.Item label="Slim build" value="1" />
            <Picker.Item label="Medium build" value="2" />
            <Picker.Item label="Large body" value="3" />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>
            Does it have a traditional culture?
          </Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={tradition}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setTradition(itemValue)}>
            <Picker.Item label="Yes" value={true} />
            <Picker.Item label="No" value={false} />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSearch}>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.textSearch}>
            Can take care of the house and cook ?
          </Text>
        </View>

        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={knowledge}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) => setKnowledge(itemValue)}>
            <Picker.Item label="Yes" value={true} />
            <Picker.Item label="No" value={false} />
          </Picker>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.btSend} onPress={() => check()}>
          <Text style={styles.btText}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Result = ({navigation}) => {
  const comment = 'Comment of price';

  const tabs = useSelector(state => state.dowry);
  const price = tabs[tabs.length - 1].value;

  return (
    <View style={styles.content}>
      <LinearGradient
        style={styles.card}
        start={{x: 0.0, y: 0.15}}
        end={{x: 0.5, y: 1.0}}
        locations={[0.2, 0.8]}
        colors={['#822B3C', '#AD674D']}>
        <View style={styles.subContent}>
          <Image style={styles.img} source={require('../img/logo.png')} />

          <Text style={styles.comment}>{comment}</Text>
        </View>

        <View style={styles.subContent}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.price}>F CFA</Text>
        </View>
      </LinearGradient>

      <TouchableOpacity
        style={styles.btBack}
        onPress={() =>
          navigation.navigate('Calculate', {
            init: false,
          })
        }>
        <Ionicons name="arrow-undo-sharp" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const Calculate = ({route, navigation}) => {
  const {init} = route.params;

  return !init ? (
    <ScrollView style={styles.page}>
      <Parameter navigation={navigation} />
    </ScrollView>
  ) : (
    <Result navigation={navigation} />
  );
};

export default Calculate;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F3F3F3',
    margin: 8,
  },

  sectionSearch: {
    marginHorizontal: 6,
    marginVertical: 5,
  },

  textSearch: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
  },

  search: {
    width: 'auto',
    height: 50,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    // marginHorizontal: 6,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 15,
  },

  picker: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'gray',
    backgroundColor: 'white',
    marginVertical: 10,
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },

  btSend: {
    margin: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#822B3C',
    borderRadius: 10,
  },

  btBack: {
    backgroundColor: '#822B3C',
    marginVertical: 40,
    paddingHorizontal: 45,
    paddingVertical: 5,
    borderRadius: 10,
  },

  btText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },

  card: {
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    width: 320,
    height: 300,
  },

  subCard: {},

  subContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  price: {
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
  },

  comment: {
    color: 'black',
    fontSize: 15,
  },

  img: {
    width: 190,
    height: 50,
    marginBottom: 20,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
