import React from 'react';
import { StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});

export const WebViewScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} testID="webview-screen">
            <WebView source={{ uri: 'https://google.com' }} />
        </SafeAreaView>
    );
};
