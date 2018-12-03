import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ZodiacSign = ({iconName, zodiac, navigation}) => {
	return(
		<TouchableHighlight 
			style={styles.sign}
			onPress={() => navigation.navigate('read', {zodiacSign:zodiac.toLowerCase()})}>
			<View style={{marginBottom:15, justifyContent:'center', alignItems:'center'}}>
				<MaterialCommunityIcons name={`${iconName}`} size={100} color="#a86e12" />
				<Text style={{color:'white', paddingBottom:10}}>
					{zodiac}
				</Text>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	sign:{
		width:121,
		height:121,
		backgroundColor:'rgba(77, 9, 132, .5)', 
		borderRadius:30, 
		overflow:'hidden',
		shadowColor: '#606060',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.6,
      shadowRadius: 5,
      elevation: 1,

	}
})

export default ZodiacSign