import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {loadHeader} from '../../../services/loadData';
import logo from '../../../../assets/logo.png';

class Header extends React.Component {
  //chamar apenas uma vez os services, por isso transformando em class e usando render
  refreshHeader() {
    const response = loadHeader();
  }

  componentDidMount() {
    this.refreshHeader();
  }

  render() {
    return (
      <>
        <View style={styles.header}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.welcome}>Olá, Manu</Text>
          <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    height: 28,
    width: 70,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Header;
