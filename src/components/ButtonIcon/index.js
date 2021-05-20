import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import {IconGopay,IconArrow,IconHigh,IconHiking,IconSneakers,IconLoafers,IconHeels,IconFlat,IconRoger, IconAkun} from "../../assets"


const ButtonIcon = ({title , type}) => {
			const Icon = () => {
				if(title =="Gopay") return <IconGopay />

				if(title =="Arrow") return <IconArrow />

				if(title == "High") return <IconHigh />
				
				if(title == "Hiking") return <IconHiking />

				if(title == "Sneakers") return <IconSneakers />

				if(title == "Loafers") return <IconLoafers />

				if(title == "Heels") return <IconHeels />

				if(title == "Flat") return <IconFlat />

				if(title == "Roger") return <IconRoger />

				if(title == "Akun") return <IconAkun />


				return <IconGopay />
				
			}

	return (
		<TouchableOpacity style={styles.container(type)} >
			<View style={styles.icon(type)}>
				<Icon/>
			</View>
		</TouchableOpacity>
		
	)
}

export default ButtonIcon

const styles = StyleSheet.create({
	container:(type)=> ({
		marginBottom: 12,
		marginRight	:type === "layanan" ? 30 : 0	
	}),
	icon: (type) => ({
		backgroundColor: 'white',
		padding: type === "layanan" ? 3 : 7,
		borderRadius: 10,
	}),

})
