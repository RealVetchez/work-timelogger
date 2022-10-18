import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';

const ClockInComponent = () => {
	const [clockInTime, setClockInTime] = useState(null);

	const [manualEnter, setManualEnter] = useState(null);

	const getClockInTime = () => {
		const currentDate = new Date();
		const minutesToRound = 15;
		const toMs = 1000 * 60 * minutesToRound;
		const time = new Date(Math.floor(currentDate.getTime() / toMs) * toMs);
		const clockIn = `${time.getHours()}:${time.getMinutes()}`;
		setClockInTime(clockIn);
	};

	const setManualEntry = () => {
		setManualEnter(!manualEnter);
	};

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<View style={styles.contentContainer}>
					<View style={styles.buttonContainer}>
						<ButtonComponent
							buttonText={'Clock In'}
							isBold={true}
							onTouched={getClockInTime}
						/>
						<ButtonComponent
							buttonText={'Manual'}
							isBold={true}
							onTouched={setManualEntry}
						/>
					</View>
					{manualEnter ? (
						<View style={styles.timeContainer}>
							<TextInput
								style={styles.timeInput}
								autoComplete={'off'}
								editable
								onChangeText={(text) => setClockInTime(text)}
							/>
						</View>
					) : null}
					{clockInTime ? (
						<Text style={styles.clockTime}>{clockInTime}</Text>
					) : (
						<Text></Text>
					)}
				</View>
			</View>
		</View>
	);
};

export default ClockInComponent;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginTop: 10,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		flex: 1,
		width: '100%',
	},
	contentContainer: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	timeContainer: {
		marginTop: 10,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	timeInput: {
		flex: 1,
		alignContent: 'center',
		textAlign: 'center',
		borderWidth: 1,
		borderColor: 'black',
	},
	clockTime: {
		fontSize: 18,
	},
});
