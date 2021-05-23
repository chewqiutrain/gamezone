import React, { useState } from 'react';
import { Button, FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) { // can take entire props object, or destructure this way

    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: "Lorem ipsum", key: "1"},
        { title: "Gotta Catch Them All (again)", rating: 4, body: "Lorem ipsum", key: "2"},
        { title: "Not so 'Final' Fantasy", rating: 3, body: "Lorem ipsum", key: "3"},
    ])

    const pressHandler = () => {
        console.log("In Home, button pressed, going to ReviewDetails screen")
        // navigation.navigate('reviewDetails', [optional param that can be used to pass data between screens])
        // navigation.getParam('key') to get the value from the 2nd arg
        
        // same as above, but more explicit, somehow allows finer control
        navigation.push('reviewDetails') 
    }

    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Go to review details' onPress={pressHandler}/> */}
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => 
                        navigation.navigate('reviewDetails', item)}> 
                        <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}