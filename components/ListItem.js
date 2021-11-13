import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  description: {
    fontSize: 16,
  },
  source: {
    fontSize: 12,
    color: 'gray',
  },
});

const ListItem = ({auther, imageUrl, description}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.source}>{auther}</Text>
      </View>
    </View>
  );
};

export default ListItem;
