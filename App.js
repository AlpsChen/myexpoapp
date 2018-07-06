import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
<<<<<<< Updated upstream
  //bug修好了
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
=======
  //登入功能
  //改bug2
  return ( <
    View style = {
      styles.container
    } >
    <
    Text > Hello World! < /Text> <
    /View>
  );
}
>>>>>>> Stashed changes
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});