import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {loadHeader} from '../../../services/loadData';
import logo from '../../../../assets/logo.png';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      subtitle: '',
    },
  };
  //chamar apenas uma vez os services, por isso transformando em class e usando render
  refreshHeader() {
    const response = loadHeader();
    this.setState({header: response});
  }

  componentDidMount() {
    this.refreshHeader();
  }

  render() {
    return (
      <>
        <View style={styles.header}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.welcome}>{this.state.header.welcome}</Text>
          <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
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
    color: '#464646',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
    marginTop: 24,
  },
  subtitle: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Header;
