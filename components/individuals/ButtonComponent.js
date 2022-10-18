import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { GlobalStyles } from '../../constants/styles';

const ButtonComponent = ({ onTouched, buttonText, isBold }) => {
	return (
		<TouchableOpacity style={styles.buttonContainer} onPress={onTouched}>
			{isBold ? (
				<Text style={styles.textBold}>{buttonText}</Text>
			) : (
				<Text style={styles.textRegular}>{buttonText}</Text>
			)}
		</TouchableOpacity>
	);
};

export default ButtonComponent;

const styles = StyleSheet.create({
	buttonContainer: {
		width: 100,
		height: 40,
		borderRadius: 100,
		backgroundColor: GlobalStyles.colors.primary40,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textRegular: {
		color: GlobalStyles.colors.primary100,
	},
	textBold: {
		color: GlobalStyles.colors.primary100,
		fontWeight: 'bold',
	},
});
