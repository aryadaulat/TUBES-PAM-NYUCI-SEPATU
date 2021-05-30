import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground } from 'react-native'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Loading} from '../../assets'
import {Profile, Saldo , Data} from '../../components'

export default class Akun extends Component {
	render() {

		return (
			<View style={styles.page}>
						<ImageBackground source={Loading} style={styles.background}>
						<Profile />
						<Saldo />
						<Data />
						</ImageBackground>
				<View style={styles.button}>
					<TouchableOpacity style={styles.btntambah}
						onPress={()=> this.props.navigation.navigate('Tambah')}>
					<FontAwesomeIcon icon={faPlus} size={40} color={'white'} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	page:{
		flex: 1,
		backgroundColor:"white"
	},
	button:{
		flex: 1,
		position: 'absolute',
		bottom:0,
		right:0,
		margin:30
	},
	btntambah:{
		padding: 20,
		backgroundColor:'skyblue',
		borderRadius:50,
				shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
		flexDirection:'row',
		alignItems:'center',
	}
})
