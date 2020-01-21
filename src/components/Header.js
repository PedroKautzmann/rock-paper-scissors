import React, {Component} from 'react';

import {View, ImageBackground} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: 200}}
          source={require('../src/assets/imgs/imagem/jokenpo.png')}
        />
      </View>
    );
  }
}
