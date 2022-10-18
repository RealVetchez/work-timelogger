import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import IndividualDayCard from './IndividualDayCard';

const DayListItem = ({ dayData }) => {
	const [isOpened, setIsOpened] = useState(false);
	const onTouched = () => {
		setIsOpened(!isOpened);
	};
	return (
		<TouchableOpacity onPress={onTouched}>
			{isOpened ? (
				<IndividualDayCard cardInfo={dayData} />
			) : (
				<View style={styles.itemContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.dayName}>{dayData.item.day}</Text>
						<Text>{dayData.item.invoiceDate}</Text>
					</View>
					<View>
						<Text>{dayData.item.startTime}</Text>
						<Text>{dayData.item.endTime}</Text>
						<Text>Test</Text>
					</View>
				</View>
			)}
			{/* <View style={styles.itemContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.dayName}>{dayData.item.day}</Text>
					<Text>{dayData.item.invoiceDate}</Text>
				</View>
				<View>
					<Text>{dayData.item.startTime}</Text>
					<Text>{dayData.item.endTime}</Text>
					<Text>Test</Text>
				</View>
			</View> */}
		</TouchableOpacity>
	);
};

export default DayListItem;

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		minWidth: '90%',
		marginTop: 15,
		padding: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 12,
	},
	titleContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		flex: 1,
	},
	date: {
		alignSelf: 'flex-end',
	},
	dayName: {
		alignSelf: 'flex-start',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
