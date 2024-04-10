import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider, Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import HeaderComp from './components/shared/HeaderComp';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [counter, setCounter] = useState(0)
  
  function onPress() {
    setCounter(data => data +1)
  }

  return (
    <PaperProvider>
      <HeaderComp />
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
          Button pressed: {counter}
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
        <Card>
          <AssetExample onPress={onPress} />
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
