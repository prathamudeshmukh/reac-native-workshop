import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles/CharacterScreenStyle";

export default class CharacterScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { navigation } = this.props;
    const thumbnailUrl = navigation.getParam("thumbnailUrl");
    const name = navigation.getParam("name");
    const description = navigation.getParam(
      "description",
      "No description available"
    );
    return (
      <View style={styles.column}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnailUrl }}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.itemDesc} testID="character-desc">
          <Text style={styles.descText}>{`\t\t${
            description ? description : "No description available"
          }`}</Text>
        </View>
      </View>
    );
  }
}
