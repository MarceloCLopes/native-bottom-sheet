import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'

export const ApplePay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >App Store 🔥</Text>
      <View style={styles.appInfo} >
        <Image
          style={styles.image}
          source={require('../../assets/rocketsIcon.png')}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.text} >Rockets X</Text>
          <Text style={[styles.text, { color: 'gray' }]}>Marcelo Lopes</Text>
          <Text
            style={[styles.text, { color: 'gray' }]}>
            Oferece compras no aplicativo
          </Text>
        </View>
      </View>
      <View style={styles.separator} ></View>
      <Text
        style={
          [
            styles.text,
            {
              color: 'gray',
              marginLeft: 15,
              marginVertical: 5
            }
          ]
        }
      >
        ACCOUNT
        <Text style={styles.text} >     marc01mcl@hotmail.com</Text>
      </Text>
      <View style={styles.separator} ></View>
      <TouchableOpacity
        onPress={() => Alert.alert('Obrigado por sua compra.')} >
        <View style={styles.confirmButton} >
          <Text style={{ color: '#fff', fontSize: 30 }}>💸</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    letterSpacing: .5,
    color: '#000'
  },
  text: {
    color: '#000',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  appInfo: {
    flexDirection: 'row',
    marginLeft: '10%',
    alignItems: 'center',
    marginBottom: 20
  },
  separator: {
    height: 1,
    backgroundColor: '#00000040',
    marginVertical: 10,
  },
  confirmButton: {
    width: 50,
    height: 50,
    backgroundColor: '#0080FB',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  }
})