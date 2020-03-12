import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}> 
      <Text >110619013</Text>
      <Text>黃鈞翊</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
