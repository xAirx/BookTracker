import { StyleSheet } from 'react-native';

const Colors = {
	light: 'white',
	dark: 'black'
};

const baseContainer = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center'
};

const buttonBorderContainer = {
	justifyContent: 'center',
	alignItems: 'center',
	borderWidth: 3,
	height: 50,
	width: 150
};

const lightStyles = StyleSheet.create({
	container: {
		...baseContainer,
		backgroundColor: Colors.light
	},
	button: {
		...buttonBorderContainer,
		backgroundColor: Colors.dark
	}
});

const darkStyles = StyleSheet.create({
	container: {
		...baseContainer,
		backgroundColor: Colors.dark
	},
	button: {
		...buttonBorderContainer,
		backgroundColor: Colors.light
	}
});

export default function useTheme(darkTheme) {
	return darkTheme ? darkStyles : lightStyles;
}
