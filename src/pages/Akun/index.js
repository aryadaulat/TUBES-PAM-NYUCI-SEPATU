import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Shizuka } from '../../assets'

const Akun = () => {
	return (
		// <View>
		// 	<Text></Text>
		// </View>
		<ImageBackground source=	{Shizuka} style={styles.background}>
				
		</ImageBackground>

	)
}

export default Akun

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
