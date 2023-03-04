import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Tabs from '../components/Tabs';

const Description = () => {
  // const bgColor = {};

  return (
    <View style={styles.page}>
      <View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Bride price</Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            In parts of Africa, a traditional marriage ceremony depends on
            payment of a bride price to be valid. In Sub-Saharan Africa, bride
            price must be paid first in order for the couple to get permission
            to marry in church or in other civil ceremonies, or the marriage is
            not considered valid by the bride's family. The amount can vary from
            a token to a great sum, real estate and other values. Lobolo (or
            Lobola, sometimes also known as Roora) is the same tradition in most
            cultures in Southern Africa Xhosa, Shona, Venda, Zulu, Ndebele etc.
            The amount includes a few to several herd of cattle, goats and a sum
            of money depending on the family. The cattle and goats constitute an
            integral part of the traditional marriage for ceremonial purposes
            during and after the original marriage ceremony.
          </Text>

          <Text style={styles.text}>
            In some societies, marriage is delayed until all payments are made.
            If the wedding occurs before all payments are made, the status is
            left ambiguous. The bride price tradition can have destructive
            effects when young men don't have the means to marry. In strife-torn
            South Sudan, many young men steal cattle for this reason, often
            risking their lives.
          </Text>
        </View>
      </View>

      <Tabs />
    </View>
  );
};

export default Description;

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
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '600',
  },

  titleView: {
    padding: 10,
  },
});
