import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik'; 
//actions contains different methods we can use
export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
                onSubmit={ (values, actions) => {
                    actions.resetForm();
                    console.log(`${JSON.stringify(values)}`);
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />

                        <Button title="Submit" color="maroon" onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

//initialValues list diffferent fields we want to show in the form, and the initial values
//props.handleChange('title') updates the title property within the props object 

//onPress={props.handleSubmit} runs the function defined at Formik onSubmit 