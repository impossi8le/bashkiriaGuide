// app.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import ObjectCardScreen from './screens/ObjectCardScreen';
import MapScreenWinter from './screens/MapScreenWinter';
import MapScreenSummer from './screens/MapScreenSummer';
import SearchScreen from './screens/SearchScreen';

import Header from './components/Header';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Функция для рендеринга заголовка, которая принимает свойства от Navigator
  const renderHeader = (props) => (
    <Header {...props} />
  );

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Akrobat-SemiBold': require('./assets/fonts/AkrobatSemiBold.ttf'),
        'Inter': require('./assets/fonts/Inter.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          header: (props) => <Header {...props} />, // Используйте Header компонент
          headerStyle: {
            backgroundColor: '#fff', // Установите фон заголовка
          },
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ObjectCard" component={ObjectCardScreen} />
        <Stack.Screen name="MapWinter" component={MapScreenWinter} />
        <Stack.Screen name="MapSummer" component={MapScreenSummer} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;