import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import star from '../../assets/estrela.png';
import greyStar from '../../assets/estrelaCinza.png';

export default function Star({
  onPress,
  disabledStar = true,
  full,
  big = false,
}) {
  const styles = stylesFunction(big);
  const getImage = () => {
    if (full) {
      return star;
    }
    return greyStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabledStar}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
}

const stylesFunction = big =>
  StyleSheet.create({
    star: {
      height: big ? 36 : 12,
      marginRight: 2,
      width: big ? 36 : 12,
    },
  });
