import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
  }

  placeNameChangedHandler = (input) => {
    this.setState({
      placeName: input,
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          onChange={this.placeNameChangedHandler}
          onPress={this.placeSubmitHandler}
        />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
