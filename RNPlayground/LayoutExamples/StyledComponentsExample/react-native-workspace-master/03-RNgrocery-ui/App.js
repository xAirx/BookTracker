import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Categories from './components/Categories';
import Card from './components/Card';

const items = [
	{ text: 'Fruits' },
	{ text: 'Bread' },
	{ text: 'Drinks' },
	{ text: 'Veggies' },
	{ text: 'Meat' },
	{ text: 'Paper Goods' }
];

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<ScrollView>
					<Titlebar>
						<Avatar source={require('./assets/avatar.jpg')} />
						<Title>Welcome back,</Title>
						<Name>Aman</Name>
						<Ionicons
							name="md-cart"
							size={32}
							color="red"
							style={{ position: 'absolute', right: 20, top: 5 }}
						/>
					</Titlebar>
					<ScrollView
						horizontal={true}
						style={{
							padding: 20,
							paddingLeft: 12,
							paddingTop: 30,
							flexDirection: 'row'
						}}
					>
						{items.map((category, index) => (
							<Categories name={category.text} key={index} />
						))}
					</ScrollView>
					<Subtitle>Items</Subtitle>
					<ItemsLayout>
						<ColumnOne>
							<Card />
						</ColumnOne>
						<ColumnTwo>
							<Card />
						</ColumnTwo>
					</ItemsLayout>
				</ScrollView>
			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	background-color: white;
`;

const Titlebar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: #b8bece;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const Subtitle = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: 500;
	margin-top: 10px;
	margin-left: 25px;
	text-transform: uppercase;
`;

const ItemsLayout = styled.View`
	flex-direction: row;
	flex: 1;
`;

const ColumnOne = styled.View``;

const ColumnTwo = styled.View``;
