/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {store} from './src/resources/redux';

import Navigation from './src/components/Navigation';
import Opening from './src/screen/Opening';
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Option from './src/screen/Option';
import Calculate from './src/screen/Calculate';
import Tribes from './src/screen/Tribes';
import Description from './src/screen/Description';
import StepsDowry from './src/screen/StepsDowry';
import OnboardingScreen from './src/screen/OnboardingScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = {bgColor: isDarkMode ? '#C32B28' : '#822B3C'};

  return (
    <Tabs.Navigator
      // initialRoute="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Calculate') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'Tribes') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'options' : 'options-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: bgColor.bgColor,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0.5,
          borderTopColor: 'gray',
        },
        tabBarHideOnKeyboard: true,
      })}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{header: () => Navigation({name: 'Home'})}}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{header: () => Navigation({name: 'Search'})}}
      />
      <Tabs.Screen
        name="Calculate"
        component={Calculate}
        initialParams={{init: false}}
        options={{header: () => Navigation({name: 'Dot value'})}}
      />
      <Tabs.Screen
        name="Tribes"
        component={Tribes}
        options={{header: () => Navigation({name: 'Tribes'})}}
      />
      <Tabs.Screen
        name="Settings"
        component={Option}
        options={{header: () => Navigation({name: 'Option'})}}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = {bgColor: '#822B3C'};

  const [firstLaunch, setFirstLaunch] = React.useState(null);
  React.useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem('appLaunched');
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem('appLaunched', 'false');
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={bgColor.bgColor}
      />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Opening">
          <Stack.Screen
            name="HomeTab"
            component={HomeTabs}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Opening"
            component={Opening}
            initialParams={{launch: firstLaunch}}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Description"
            component={Description}
            options={{header: () => Navigation({name: 'About'})}}
          />

          <Stack.Screen
            name="StepsDowry"
            component={StepsDowry}
            options={{header: () => Navigation({name: 'Dowry Steps'})}}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* </SafeAreaProvider> */}
    </Provider>
  );
};

export default App;
