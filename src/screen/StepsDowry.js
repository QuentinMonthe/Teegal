import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const StepsDowry = ({route, navigation}) => {
  const {tribeId, title} = route.params;

  return (
    <View>
      {/* <Text>Tribe ID: {JSON.stringify(tribeId)}</Text>
      <Text>Tribe: {JSON.stringify(title)}</Text> */}
      {/* <Text></Text> */}
      <View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Step 1</Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            facilis quisquam quae harum, obcaecati ducimus totam expedita
            doloribus illum explicabo ipsa eaque non perferendis natus minus
            nostrum sed! Fugit culpa officia vero eaque hic quisquam voluptas
            rem molestiae explicabo facilis deleniti distinctio quo, fugiat
            recusandae ex dolorem beatae eos quia eum adipisci maxime,
            reprehenderit odit ad? Sequi est at beatae? Ullam sunt aperiam
            delectus rem, tempore id, ipsum unde, quia accusantium animi debitis
            sapiente laudantium dicta deleniti sed fugit mollitia temporibus
            provident corrupti in harum eligendi praesentium! Sunt porro
            voluptas, libero incidunt consequuntur beatae magni eveniet
            distinctio! Laudantium molestiae minus illo adipisci deserunt,
            laboriosam amet delectus in quibusdam tempore. Deserunt fuga dolore
            ipsum reiciendis veritatis iure vel quia dignissimos tempore,
            quaerat impedit? Temporibus ipsum ipsam facilis corporis eveniet
            impedit esse, praesentium sint, saepe sit porro debitis provident
            corrupti nobis. Velit repudiandae sequi saepe dolores reiciendis
            perspiciatis voluptatem aspernatur blanditiis eligendi?
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.btSend}
          onPress={() => navigation.navigate('Next')}>
          <Text style={styles.btText}>Next step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StepsDowry;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  text: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25,
  },

  textView: {
    margin: 4,
    padding: 4,
    color: 'black',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },

  titleView: {
    padding: 10,
  },

  content: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
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

  btText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});
