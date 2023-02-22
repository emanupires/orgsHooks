import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import Farmer from './Farmer';
import {loadFarmers} from '../../../services/loadData';

export default function Farmers({header: Header}) {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const response = loadFarmers();
    setTitle(response.title);
    setList(response.list);
  }, []);

  const HeaderList = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      keyExtractor={image => image}
      renderItem={({item}) => <Farmer {...item} />}
      ListHeaderComponent={HeaderList}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
  },
});
