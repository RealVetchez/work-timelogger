import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import ClockInComponent from './individuals/ClockInComponent';

const IndividualDayCard = ({ cardInfo }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.dayName}>{cardInfo.item.day}</Text>
				<Text>{cardInfo.item.invoiceDate}</Text>
			</View>
			<View style={styles.contentContainer}>
				<ClockInComponent />
				<ClockInComponent />
			</View>
		</View>
	);
};

export default IndividualDayCard;

const styles = StyleSheet.create({
	cardContainer: {
		minWidth: '100%',
		minHeight: 200,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 12,
		padding: 15,
		marginTop: 10,
	},
	titleContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	contentContainer: {
		flexDirection: 'column',
		padding: 15,
		flex: 1,
	},
	dayName: {
		alignSelf: 'flex-start',
		fontSize: 22,
		fontWeight: 'bold',
	},
});
