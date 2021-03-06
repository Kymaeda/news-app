import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Loading from '../components/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      ></WebView>
    </SafeAreaView>
  );
};
