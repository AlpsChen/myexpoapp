import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  //登入功能
  //bug修好了
  render() {
    return ( <
      View style = {
        styles.container
      } >
      <
      Text > Hello World! < /Text> < /
      View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

//不應該改master喔
//亂改2