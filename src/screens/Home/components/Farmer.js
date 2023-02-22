import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import Stars from '../../../components/Stars';

export default function Produtor({name, image, distance, stars}) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelected(!selected)}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars number={stars} big={selected} edit={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    borderRadius: 6,
    //Android
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    //iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    borderRadius: 6,
    height: 48,
    marginLeft: 16,
    marginVertical: 16,
    width: 48,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 16,
    marginVertical: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginRight: 10,
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
