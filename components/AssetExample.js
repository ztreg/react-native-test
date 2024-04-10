import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyle } from '../assets/styles'
/* eslint-disable react/prop-types */ 

export default function AssetExample(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <ScrollView style={styles.scrollable}>
          <Text>Ea est irure do elit aliquip occaecat minim ex sit adipisicing elit. Adipisicing sint consequat veniam pariatur ad mollit adipisicing nulla et officia ut in. Aliqua esse et eu laboris dolor anim ullamco proident ad. Duis velit dolore cillum labore pariatur duis consequat voluptate excepteur laborum sint id. Id enim reprehenderit voluptate ut ea Lorem elit commodo ut irure fugiat in sint enim.</Text>
          <Text>Ea est irure do elit aliquip occaecat minim ex sit adipisicing elit. Adipisicing sint consequat veniam pariatur ad mollit adipisicing nulla et officia ut in. Aliqua esse et eu laboris dolor anim ullamco proident ad. Duis velit dolore cillum labore pariatur duis consequat voluptate excepteur laborum sint id. Id enim reprehenderit voluptate ut ea Lorem elit commodo ut irure fugiat in sint enim.</Text>
      </ScrollView>
      <TouchableOpacity onPress={props.onPress} style={globalStyle.defaultButton}>
        <Text style={globalStyle.defaultButton.text}>A Button wow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  scrollable: {
    maxHeight: 100
  },
});


