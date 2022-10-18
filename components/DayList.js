import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DayListItem from './DayListItem';

const renderDayItem = (itemData) => {
	console.log(itemData.item);
	return <DayListItem dayData={itemData} />;
};

const DayList = ({ listData, testData }) => {
	const [invoiceData, setInvoiceData] = React.useState(listData);
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={invoiceData}
				renderItem={renderDayItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default DayList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 'auto',
	},
	list: {
		flex: 1,
	},
});
