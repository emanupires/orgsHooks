import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Star from './Star';

export default function Stars({number: oldNumber, edit = false, big = false}) {
  const [number, setNumber] = useState(oldNumber);

  const RenderStars = () => {
    const listOfStars = [];
    for (let i = 0; i < 5; i++) {
      listOfStars.push(
        <Star
          key={i}
          onPress={() => setNumber(i + 1)}
          disabledStar={!edit}
          full={i < number}
          big={big}
        />,
      );
    }
    return listOfStars;
  };

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    marginRight: 2,
  },
});
