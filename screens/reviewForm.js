import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik'; 
import * as yup from 'yup';
import FlatButton from '../shared/button';

// keys will be form fields
// values are some validation 
/**
 * yup.string().required().min(4) 
 *      data must be string, is required, must have minimum 4 chars 
 */
const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string() // by default data in inputForms are string. 
        .test('is-num-1-5', 'Rating must be a number between 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

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
                validationSchema={reviewSchema}
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
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>
                        
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>
                        
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>

                        {/* <Button title="Submit" color="maroon" onPress={props.handleSubmit}/> */}
                        <FlatButton text='submit' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

//initialValues list diffferent fields we want to show in the form, and the initial values
//props.handleChange('title') updates the title property within the props object 

//onPress={props.handleSubmit} runs the function defined at Formik onSubmit 

//onBlur is triggered when the user leaves the field of entry 