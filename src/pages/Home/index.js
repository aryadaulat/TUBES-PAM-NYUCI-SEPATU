import React from 'react'
import { StyleSheet, Text,Image , View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { BackgroundSatu, Logo } from '../../assets';
import {PesananAktif, Saldo} from "../../components/";
import ButtonIcon from '../../components/ButtonIcon';


const Home = () => {
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
			<Saldo />
			<View style={styles.layanan}>
				<Text style={styles.label}>Layanan Kami</Text>
				<View style={styles.iconLayanan}>
				<ButtonIcon title="High" type="layanan"/>
				<ButtonIcon title="Hiking" type="layanan"/>
				<ButtonIcon title="Sneakers" type="layanan"/>
				<ButtonIcon title="Loafers" type="layanan"/>
				<ButtonIcon title="Heels" type="layanan"/>				
				<ButtonIcon title="Flat" type="layanan"/>

				</View>
			</View>
				<View style={styles.pesananAktif}>
				<Text style={styles.label}>Riwayat Pesanan</Text>
				<PesananAktif title="Pesanan No. 0002142" status ="Sudah Selesai"/>
				<PesananAktif title="Pesanan No. 0002142" status ="Dalam Proses Pengerjaan"/>
				<PesananAktif title="Pesanan No. 0002142" status ="Sudah Selesai"/>
				<PesananAktif title="Pesanan No. 0002142" status ="Sudah Selesai"/>
			</View>
			</ScrollView>

		
		</View>
	)
}

export default Home

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
	logo: {
		width: windowWidth*0.25,
		height: windowHeight * 0.06	
	},
	hello: {
			marginTop: windowHeight*0.06,
	},
	selamat: {
		fontSize: 24,
		fontFamily: 'TitilliumWeb-Reguler'
	},
	username: {
		fontSize:18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	layanan: {
		paddingHorizontal: 30,
		paddingTop: 30,
	},
	label: {
		fontSize: 18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	iconLayanan:{
		flexDirection : 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		flexWrap: 'wrap'
	},
	pesananAktif:{
		paddingHorizontal: 30,
		backgroundColor: '#F6F6F6',
		flex: 1,
		borderTopRightRadius: 20,
		borderTopLeftRadius:20,
	}
});