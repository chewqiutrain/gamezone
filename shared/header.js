import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props) {

    const openMenu = () => {
        // console.log(props)
        // this assume nesting makes this function too specific. i.e.
        // we can only safely call openDrawer if a navigation object is nested 
        // 2 levels down. that's probably why they prefer to 
        // destructure at the argument definition
        props.props1.navigation.openDrawer()
    }

    return (
        <ImageBackground resizeMode={'cover'} 
            source={require('../assets/game_bg.png')} 
            style={styles.header}>
        
            <MaterialIcons name='menu' 
                size={28} 
                onPress={ openMenu } 
                style={styles.icon}
            />

            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{ props.title }</Text>
                
            </View>
        

        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row', // defines the primary axis
        alignItems: 'center', //alignItems is on the secondary axis
        justifyContent: 'center',
        backgroundColor: 'tomato',
        flex: 1
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        backgroundColor: 'purple'
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
        backgroundColor: "yellow"
    },
    headerTitle: {
        flexDirection: 'row'
    }
})