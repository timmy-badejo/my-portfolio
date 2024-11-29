import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import AboutMePage from './src/pages/AboutMePage';
import ServicesPage from './src/pages/ServicesPage'; // Import the new Services page
import LandingPage from './src/pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

// Set up the stack navigator
const Stack = createStackNavigator();

// App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AboutMe">
        <Stack.Screen name="AboutMe" component={AboutMePage} />
        <Stack.Screen name="Services" component={ServicesPage} /> {/* Add the Services page to the navigation */}
        <Stack.screen nname="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

