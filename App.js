import React, { useState } from 'react';
// whats the diff between this and 
// import { AppLoading } from 'expo-app-loading' ? 
import AppLoading from 'expo-app-loading'; 
import Home from './screens/home';
import * as Font from 'expo-font';
//import Navigator from './routes/homeStack'; // the default export is called the Navigator
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf') 
  });

export default function App() {
  console.log("App started")
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator/>
    );    
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}