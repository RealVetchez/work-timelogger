import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlobalStyles } from '../constants/styles';
import DayListItem from '../components/DayListItem';
import DayList from '../components/DayList';
import IndividualDayCard from '../components/IndividualDayCard';

const SAMPLE_DATA = [
	{
		id: 1,
		day: 'Monday',
		startTime: '8AM',
		endTime: '5PM',
		invoiceDate: new Date().toLocaleString() + '',
	},
	{
		id: 2,
		day: 'Tuesday',
		startTime: '8AM',
		endTime: '5PM',
		invoiceDate: new Date().toLocaleString() + '',
	},
	{
		id: 3,
		day: 'Wednesday',
		startTime: '8AM',
		endTime: '5PM',
		invoiceDate: new Date().toLocaleString() + '',
	},
	{
		id: 4,
		day: 'Thursday',
		startTime: '8AM',
		endTime: '5PM',
		invoiceDate: new Date().toLocaleString() + '',
	},
	{
		id: 5,
		day: 'Friday',
		startTime: '8AM',
		endTime: '5PM',
		invoiceDate: new Date().toLocaleString() + '',
	},
];

const renderDayItem = (itemData) => {
	return <DayListItem dayData={itemData} />;
};

const CurrentInvoice = () => {
	const [invoiceData, setInvoiceData] = React.useState(SAMPLE_DATA);
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.titleStyle}>October 1-15</Text>
			{/* <FlatList
				data={invoiceData}
				renderItem={renderDayItem}
				keyExtractor={(item) => item.id}
			/> */}
			<DayList listData={invoiceData} />
		</SafeAreaView>
	);
};

export default CurrentInvoice;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalStyles.colors.background,
		margin: 'auto',
		padding: 15,
		minWidth: '90%',
		fontFamily: 'Roboto',
	},
	titleStyle: {
		fontWeight: 'bold',
		fontSize: 25,
	},
});
