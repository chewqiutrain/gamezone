import React from 'react';
import { Button, View, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails(props) {
    
    const pressHandler = () => {
        console.log("In ReviewDetails, button pressed, going to Home screen")
        //props.navigation.navigate('home')
        props.navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            {/* <Text>ReviewDetails Screen</Text>
            <Button title='Back to Home screen' onPress={pressHandler}/> */}

            <Text>{ props.navigation.getParam('title') }</Text>
            <Text>{ props.navigation.getParam('body') }</Text>
            <Text>{ props.navigation.getParam('rating') }</Text>

        </View>
    )
}