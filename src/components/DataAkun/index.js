import React from 'react'
import { StyleSheet, Text, TextInput,Dimensions } from 'react-native'

const DataAkun = ({label,placeholder,keyboardType,isTextArea,
	onChangeText,namaState,value}) => {

	if(isTextArea){
		return (
			<>
				<Text style={styles.label}>{label}</Text>
				<TextInput
				multiline={true}
				numberOfLines={4}
				placeholder={placeholder}
				styles={styles.textinputarea}
				keyboardType={keyboardType}
				value={value}
				onChangeText={(text)=> onChangeText(namaState,text)}/>
				
			</>
		);
	}

	return (
		<>
			<Text style={styles.label}>{label}</Text>
			<TextInput placeholder={placeholder}
			styles={styles.textinput}
			keyboardType={keyboardType}
			value={value}
			onChangeText={(text)=> onChangeText(namaState,text)}/>
			
		</>
	);
};

export default DataAkun
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	label: {

		fontSize: 16 ,
		marginBottom: 5,
		// flexDirection: 'row',
		// borderRadius: 10,
	},
	textinput: {
		
		padding: 10,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 5,
		marginBottom: 10
	},
	textinputarea:{
		textAlignVertical:'top',
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10
	
	}
})
