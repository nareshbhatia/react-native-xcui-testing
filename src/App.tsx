import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TabNavigator } from './navigators';

export const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
