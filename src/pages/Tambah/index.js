import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,ImageBackground } from 'react-native'
import { DataAkun } from '../../components'
import {Loading} from '../../assets'

export default class Tambah extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 nama:'',
			 nomorHP:'',
			 alamat:'',

		}
	}
	onChangeText = (namaState,value) => {
		this.setState({
			[namaState] : value
		})
	}

	onSubmit = () => {
		console.log("Masuk Submit");
		console.log(this.state);
	}
	
	render() {

		return (
			<View style={styles.page}>
				<ImageBackground source={Loading} style={styles.background}>
				<Text style={styles.judul}>Tambah Data Akun</Text>
				<DataAkun label="Nama" placeholder="Masukkan Nama"
				onChangeText={this.onChangeText}
				value={this.state.nama}
				namaState="nama"/>

				<DataAkun label="No. HP" placeholder="Masukkan Nomor HP"
				keyboardType="number-pad"
				onChangeText={this.onChangeText}
				value={this.state.nomorHP}
				namaState="nomorHP"/>

				<DataAkun label="Alamat" placeholder="Masukkan Alamat"
				isTextArea={true}
				onChangeText={this.onChangeText}
				value={this.state.alamat}
				namaState="alamat"/>
				{/* onPress={() => this.onSubmit} */}
				<TouchableOpacity style={styles.submit}  onPress={()=> this.props.navigation.navigate('AkhirAkun')} >
					<Text style={styles.text}>SUBMIT</Text>
				</TouchableOpacity>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	judul:{
		fontSize:30,
		fontWeight:'bold',
		textAlign:'center',
		marginBottom:50
	},
	background: {
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	page:{
		flex: 1,
		// padding: 30
	},
	submit: {
		backgroundColor:'black',
		padding:10,
		borderRadius:5,
		marginTop:10
	},
	text:{
		color:'white',
		fontWeight:'bold',
		textAlign:'center'
	}
})
