import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
    ]}>

    <View>
        <Button title='Back' 
        onPress={() => router.push('/')}/>
    </View>

    <View style={{flex: 1, backgroundColor: '#355872'}} />
    <View style={{flex: 2, backgroundColor: '#7AAACE'}} />
    <View style={{flex: 3, backgroundColor: '#9CD5FF'}} />

       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;