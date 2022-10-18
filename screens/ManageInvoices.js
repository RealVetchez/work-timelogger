import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { GlobalStyles } from '../constants/styles';

const ManageInvoices = () => {
	return (
		<View style={styles.container}>
			<Text>ManageInvoices</Text>
		</View>
	);
};

export default ManageInvoices;

const styles = StyleSheet.create({
	container: {
		backgroundColor: GlobalStyles.colors.background,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
