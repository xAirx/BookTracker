import React, { Component } from 'react';
import { View, Button } from 'react-native';

import useTheme from './AppStyles';

export default class App extends Component {
	state = {
		darkTheme: false
	};

	toggleTheme = () => {
		this.setState({ darkTheme: !this.state.darkTheme });
	};

	render() {
		const styles = useTheme(this.state.darkTheme);

		return (
			<View style={styles.container}>
				<View style={styles.button}>
					<Button title={'Click Me'} onPress={() => this.toggleTheme()} />
				</View>
			</View>
		);
	}
}
