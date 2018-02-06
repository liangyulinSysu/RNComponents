/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Button, Modal } from 'react-native';
import ModalView from './src/Components/ModalView';
import Confirm from './src/Container/Confirm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  _onDisplayModalView() {
    this.setState({ visible: true });
  }
  
  _showModalView = () => {
    if(this.state.visible) {
      return(
        <Confirm
          supportClickClose
          title='test'
          description='are u sure to log out'
        />
      );
    }
  }

  render(){
    return(
      <View style={styles.containerViewStyle}>
        {this._showModalView()}
        <Button
          title='click me'
          style={styles.btnStyle}
          onPress={this._onDisplayModalView.bind(this)} 
        />
      </View>
    );
  }
};

const styles = {
  containerViewStyle: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  btnStyle: {
    marginTop: 100,
  }
};

export default App;