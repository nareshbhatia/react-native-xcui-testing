import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import SafeAreaView from 'react-native-safe-area-view';

const rgbToHex = (r: number, g: number, b: number) => {
    let rStr = r.toString(16).toUpperCase();
    let gStr = g.toString(16).toUpperCase();
    let bStr = b.toString(16).toUpperCase();

    if (rStr.length === 1) {
        rStr = '0' + rStr;
    }
    if (gStr.length === 1) {
        gStr = '0' + gStr;
    }
    if (bStr.length === 1) {
        bStr = '0' + bStr;
    }

    return '#' + rStr + gStr + bStr;
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    colorBox: {
        height: 220,
        marginTop: 16,
        marginBottom: 16,
    },
    slider: {
        alignItems: 'stretch',
        marginLeft: 16,
        marginRight: 16,
        height: 60,
    },
    colorValue: {
        marginTop: 16,
        fontFamily: 'Menlo',
        fontSize: 24,
        textAlign: 'center',
    },
});

export const ColorPickerScreen = () => {
    // Default to gold
    const [r, setR] = useState(0xf8);
    const [g, setG] = useState(0x9f);
    const [b, setB] = useState(0x1b);

    const hexColor = rgbToHex(r, g, b);
    const colorBoxStyle = {
        ...styles.colorBox,
        backgroundColor: hexColor,
    };

    return (
        <SafeAreaView style={styles.safeArea} testID="color-picker-screen">
            <View style={colorBoxStyle} />
            <Slider
                style={styles.slider}
                value={r}
                minimumValue={0}
                maximumValue={255}
                step={1}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#7F7F7F"
                thumbTintColor="#FF0000"
                testID="slider-red"
                onValueChange={(value) => setR(value)}
            />
            <Slider
                style={styles.slider}
                value={g}
                minimumValue={0}
                maximumValue={255}
                step={1}
                minimumTrackTintColor="#00FF00"
                maximumTrackTintColor="#7F7F7F"
                thumbTintColor="#00FF00"
                testID="slider-green"
                onValueChange={(value) => setG(value)}
            />
            <Slider
                style={styles.slider}
                value={b}
                minimumValue={0}
                maximumValue={255}
                step={1}
                minimumTrackTintColor="#0000FF"
                maximumTrackTintColor="#7F7F7F"
                thumbTintColor="#0000FF"
                testID="slider-blue"
                onValueChange={(value) => setB(value)}
            />
            <Text style={styles.colorValue} testID="color-value-text">
                {hexColor}
            </Text>
        </SafeAreaView>
    );
};
