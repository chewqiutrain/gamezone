import React, { useState } from 'react';
import { Button, FlatList, View, StyleSheet, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';

export default function Home({ navigation }) { // can take entire props object, or destructure this way

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: "Lorem ipsum", key: "1"},
        { title: "Gotta Catch Them All (again)", rating: 4, body: "Lorem ipsum", key: "2"},
        { title: "Not so 'Final' Fantasy", rating: 3, body: "Lorem ipsum", key: "3"},
    ])
    
    // a review object {title: , body: , rating:, key }
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }

    const pressHandler = () => {
        console.log("In Home, button pressed, going to ReviewDetails screen")
        // navigation.navigate('reviewDetails', [optional param that can be used to pass data between screens])
        // navigation.getParam('key') to get the value from the 2nd arg
        
        // same as above, but more explicit, somehow allows finer control
        navigation.push('reviewDetails') 
    }

    //modal visible true will cause it to take the whole screen
    // we want to allow a user to click a button to show the modal
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Go to review details' onPress={pressHandler}/> */}

            <Modal visible={modalOpen} animationType='slide'> 
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                        name='close'
                        size={24}
                        style={ { ...styles.modalToggle, ...styles.modalClose} }
                        onPress={() => setModalOpen(false)}
                        />
                        <Text>Hello from the Modal!</Text>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

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

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 1,
        alignSelf: "center"      
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})

//Keyboard.dismiss is a reference to the function, same as () => Keyboard.dismiss()