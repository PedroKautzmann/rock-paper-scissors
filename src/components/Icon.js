import React, {Component} from 'react';

import {View, Image, Text, StyleSheet} from 'react-native';

export default class Icon extends Component {
  render() {
    if (this.props.choice == 'rock') {
      return (
        <View style={styles.icon}>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={require('../src/assets/imgs/imagem/rock.png')} />
        </View>
      );
    } else if (this.props.choice == 'paper') {
      return (
        <View style={styles.icon}>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={require('../src/assets/imgs/imagem/paper.png')} />
        </View>
      );
    } else if (this.props.choice == 'scissors') {
      return (
        <View style={styles.icon}>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={require('../src/assets/imgs/imagem/scissors.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginBottom: 10,
  },
  textPlayer: {
    fontSize: 16,
    marginBottom: 5,
  },
});
