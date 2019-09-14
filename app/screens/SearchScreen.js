import { View, TextInput } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import styles from './styles/SearchScreenStyle';
import List from '../components/List';

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
    this.onSearch = this.onSearch.bind(this);
    this.gotoCharacterScreen = this.gotoCharacterScreen.bind(this);
  }

  getParsedData(apiData) {
    console.log(apiData);
    return apiData.data.results.map(item => {
      return {
        name: item.name,
        thumbnailUrl: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        description: item.description,
      };
    });
  }

  onSearch() {
    if (!this.state.searchText) {
      return;
    }
    const baseUrl = 'https://gateway.marvel.com:443/v1/public';
    const endPoint = '/characters';
    const apiKey = '6c3e2173a8f3e5adb795172ad8dd3ef2';
    const hash = '4629485a6de69f01f4046b53b33a1386';
    const finalUrl = `${baseUrl}${endPoint}?apikey=${apiKey}&hash=${hash}&ts=1&nameStartsWith=${
      this.state.searchText
    }`;
    return fetch(finalUrl)
      .then(response => response.json())
      .then(responseJson => {
        const parsedData = this.getParsedData(responseJson);
        this.setState({ data: parsedData });
      })
      .catch(error => {
        console.log('error while calling api', error);
      });
  }

  gotoCharacterScreen(item) {
    this.props.navigation.navigate('Character', item);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controlContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              testID="search-input"
              style={styles.searchInput}
              onChangeText={text => this.setState({ searchText: text })}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button testID="search-button" onClick={this.onSearch}>
              SEARCH
            </Button>
          </View>
        </View>
        <View style={styles.listContainer}>
          <List data={this.state.data} onItemClick={this.gotoCharacterScreen} />
        </View>
      </View>
    );
  }
}
