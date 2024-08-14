import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import runningKid from "./assets/pexels-hotaru-1104007.jpg"


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex: 1}}>
    <ImageBackground source={runningKid} style={{flex: 1}}>

    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
