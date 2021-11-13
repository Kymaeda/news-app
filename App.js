import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import articles from './news';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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

export default function App() {
  const renderItem = ({ item }) => (
    <ListItem
      imageUrl={item.urlToImage}
      description={item.title}
      auther={item.auther}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
