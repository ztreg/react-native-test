import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper';
import { Stack, useRouter } from 'expo-router'

import { globalStyle } from '../../assets/styles'

export default function HeaderComp() {
  // const [active, setActive] = React.useState('');

  const router = useRouter()

  return (
    <SafeAreaView style={styles.drawer}>
      <Drawer.CollapsedItem
        focusedIcon="home"
        unfocusedIcon="home-outline"
        label="home"
        onPress={() => router.push('/about')}
      />
      <Drawer.CollapsedItem
        focusedIcon="inbox"
        unfocusedIcon="inbox-outline"
        label="Inbox"
      />
    </SafeAreaView>

    );
};


const styles = StyleSheet.create({
  drawer: {
    marginTop: 32,
    backgroundColor: 'yellow',
    color: 'black'
  }
})