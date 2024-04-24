import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg"

export default function SearchCube() {
    return (
        <View style={styles.container}>
            <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            >
            <G clip-path="url(#clip0_1447_4878)">
                <Path d="M23 6H28V11" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M9 26H4V21" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M28 21V26H23" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M4 11V6H9" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M16 8L23 12V20L16 24L9 20V12L16 8Z" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M9 12L16 16L23 12" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M16 16V24" stroke="#0057FF" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </G>
            <Defs>
                <ClipPath id="clip0_1447_4878">
                <Rect width="32" height="32" fill="white"/>
                </ClipPath>
            </Defs>
            </Svg>
        </View>
    );
}

  
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
})
