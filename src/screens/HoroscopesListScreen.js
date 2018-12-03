import React, { Component } from 'react'
import { View, Text, TouchableHighlight, ScrollView, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ZodiacSign from '../components/ZodiacSign'
import { horoscopeList } from '../data/horoscopeList'

class HoroscopesListScreen extends Component{
	render(){
		return(
			<View style={{flex:1, backgroundColor:'#3a2766'}}>
				<ScrollView>
					<View 
						style={{
							flex:1,
						}}
					 >
						<FlatList 
							data={horoscopeList}
							numColumns={2}
							columnWrapperStyle={{
								flexDirection:'row',
								flexWrap:'wrap',
								flex:1,
								justifyContent:'space-between',
								alignItems:'center',
								padding:20

							}}
							renderItem={({item}) => (
								<ZodiacSign iconName={item.iconName} zodiac={item.zodiac} navigation={this.props.navigation} />
							)}
							keyExtractor={item => item.zodiac}
						/>
					</View>
				</ScrollView>
			</View>
		)
	}
}

export default HoroscopesListScreen