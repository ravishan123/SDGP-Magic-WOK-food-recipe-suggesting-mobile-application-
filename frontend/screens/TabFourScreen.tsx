import * as React from 'react';
import { StyleSheet, Button  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View } from '../components/Themed';

export default function TabFourScreen() {

  const loginRedirect = (props) => {
    props.navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Four</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabFourScreen.tsx" />
      <Button
        onPress ={() => loginRedirect() }
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
