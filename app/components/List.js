import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from './styles/ListStyle';

export default class List extends React.Component {
  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
  }
  renderSeparator() {
    return (
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => this.props.onItemClick(item)}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnailUrl }}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        testID={"character-list"}
        data={this.props.data}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled
      />
    );
  }
}
