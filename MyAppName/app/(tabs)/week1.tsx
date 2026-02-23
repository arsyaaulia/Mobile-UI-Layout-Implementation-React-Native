import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const week1 = () => {
  return (
    <View>

      <View>
        <Button title='Go to Main ' 
         onPress={() => router.push('/flex')}/>
      </View>

      <View  style={styles.container}>
        <Text style={styles.textmerahkecil}>just red</Text>
        <Text style={styles.textbirubold}>just big blue</Text>
        <Text style={[styles.textbirubold, styles.textmerahkecil]}>bigBlue, then red</Text>
        <Text style={styles.textbirubold}>red, then bigBlue</Text>
      </View>
 
      {/* <View
        style={[
          styles.containerbaru,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View> */}

    </View>
  )
}

const styles = StyleSheet.create({
  textmerahkecil: {
    color: 'beige',
  },
  
  textbirubold: {
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  container:{
    margin: 10,
    // alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },

  // containerbaru:{
  //   padding: 10,
  //   flex: 1,
  // }
  
});

export default week1