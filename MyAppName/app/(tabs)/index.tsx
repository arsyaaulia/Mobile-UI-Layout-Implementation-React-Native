import { router } from 'expo-router';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <View  style={[styles.margin]}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/1200x/de/28/cd/de28cd9f0c89313c2bbae71834b616ed.jpg' }} 
          style={styles.gambarBesar} 
        />
        <Text style={[styles.textNormal, {marginBottom:20}]}>arsyaauliia</Text>
      </View>

      <View style={[styles.horizontalContainer, styles.margin]}>
        <TouchableOpacity style={styles.buttonBiru} onPress={() => router.push('/flex' as any)}>
          <Text style={styles.textNormalKecil}>Go to Flex</Text>
          
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonMerah} onPress={() => router.push('/week1' as any)}>
          <Text style={styles.textNormalKecil}>Go to Week1</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.gridContainer]}>
          <Image 
            source={require('../../assets/images/Foto1.jpeg')} 
            style={styles.kotakGambar} 
          />
          
          <Image 
            source={require('../../assets/images/Foto7.jpeg')} 
            style={styles.kotakGambar} 
          />

          <Image 
            source={require('../../assets/images/Foto3.jpeg')} 
            style={styles.kotakGambar} 
          />

          <Image 
            source={require('../../assets/images/Foto4.jpeg')} 
            style={styles.kotakGambar} 
          />

          <Image 
            source={require('../../assets/images/Foto5.jpeg')} 
            style={styles.kotakGambar} 
          />

          <Image 
            source={require('../../assets/images/Foto6.jpeg')} 
            style={styles.kotakGambar} 
          />
      </View>
      {/* <View style={styles.buttonBawah}>
        <Button title='Click Me' 
          onPress={() => Alert.alert('Button Clicked!', 'You pressed the button!')}/>
      </View> */}

      <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.footerButton}
        onPress={() => Alert.alert('Berhasil', 'Tombol sudah berfungsi!')}
      >
        <Text style={styles.textNormalKecil}>CLICK ME</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  // textbirubold: {
  //   color: 'black',
  //   fontWeight: 'bold',
  //   fontSize: 24,
  // },

  textNormal: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },

  textNormalKecil: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  margin:{
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  gambarBesar:{
    width: 120,
    height: 120,
    margin:20,
    borderRadius: 10,
  },

  horizontalContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },

  buttonBiru: {
    backgroundColor: 'purple',
    padding: 20,
    flex: 1,
  },

  buttonMerah: {
    backgroundColor: 'blue',
    padding: 20,
    flex: 1,
  },

  gridContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    padding: 5,
    marginTop: 20,
    
  },

  kotakGambar:{
    width: '30%',
    height: '50%',
    aspectRatio: 1,
    borderRadius: 5,
  },

  // buttonBawah:{
  //   position: 'absolute',
  //   bottom:0,
  //   left:0,
  //   right:0,
  // },

  footerButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
  
  },
});

export default index