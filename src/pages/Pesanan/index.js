import React , {useState}  from 'react'

import { StyleSheet, Text, View,TextInput,ImageBackground,ScrollView,Dimensions,Item,Picker } from 'react-native'
import { BackgroundSatu, Logo } from '../../assets';

const Pesanan = () => {
	return (
		<View style={styles.page}>
			<ScrollView showsVerticalScrollIndicator={false}>
			<ImageBackground source={BackgroundSatu} style={styles.header}>
					{/* <Image source={Logo} style={styles.logo} /> */}
					{/* <View	style={styles.hello}>
						<Text style={styles.selamat}>Selamat Datang </Text>
						<Text style={styles.username}>Arya Daulat</Text>
					</View> */}
			</ImageBackground>
			{/* <Text>Nama</Text> */}
			{/* <TextInput></TextInput> */}
			<Text style={styles.label}>FORMULIR PENYUCIAN</Text>
			<Text style={styles.nama}>Nama</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}>Jenis</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}>Alamat</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}>No.WhatsApp</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			
			</ScrollView>
		</View>
	)
}

export default Pesanan
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white'
	},

	header: {
		width: windowWidth,
		height: windowHeight * 0.25	,
		paddingHorizontal: 25,
		paddingTop: 25,  
	},
	label: {
		 paddingHorizontal:100 ,
		fontSize: 18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	form: {
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	input: {

	},
	nama: {
		fontSize:18,
		fontFamily: 'TitilliumWeb-Bold'
	}
})
