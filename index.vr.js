import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class ColorChange extends React.Component {
  constructor() {
    super();

    this.state = { textColor: 'yellow' };
  }

  render() {
    return (
      <Text
        style={{ 
          color: this.state.textColor,
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [
            { translate: [0, 0, -3] },
            { scale: 2 },
          ],
        }}
        onEnter={() => this.setState({ textColor: 'red' })}
        onExit={() => this.setState({ textColor: 'yellow' })}>
        This text will turn red when you look at it.
      </Text>
    );
  }
}

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <ColorChange />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
