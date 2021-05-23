import React from 'react';
import { Image, View, StyleSheet, Text} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails(props) {
    const rating = props.navigation.getParam('rating')

    const pressHandler = () => {
        console.log("In ReviewDetails, button pressed, going to Home screen")
        //props.navigation.navigate('home')
        props.navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            {/* <Text>ReviewDetails Screen</Text>
            <Button title='Back to Home screen' onPress={pressHandler}/> */}
            <Card>
                <Text>{ props.navigation.getParam('title') }</Text>
                <Text>{ props.navigation.getParam('body') }</Text>
                {/* <Text>{ props.navigation.getParam('rating') }</Text> */}
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]}/>

                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})