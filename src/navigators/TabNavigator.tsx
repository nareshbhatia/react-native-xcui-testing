import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ColorPickerScreen, WebViewScreen } from '../screens';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Native"
                component={ColorPickerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="react" color={color} size={size} />
                    ),
                    tabBarTestID: 'bottom-tab-bar-native',
                }}
            />
            <Tab.Screen
                name="WebView"
                component={WebViewScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="web" color={color} size={size} />
                    ),
                    tabBarTestID: 'bottom-tab-bar-webview',
                }}
            />
        </Tab.Navigator>
    );
};
