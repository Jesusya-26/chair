import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg"

export default function Filters() {
    return (
        <View style={styles.container}>
            <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            >
            <G clip-path="url(#clip0_1631_2432)">
                <Path d="M6.5 6.5C7.32843 6.5 8 5.82843 8 5C8 4.17157 7.32843 3.5 6.5 3.5C5.67157 3.5 5 4.17157 5 5C5 5.82843 5.67157 6.5 6.5 6.5Z" fill="white" stroke="#9199A3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M10.5 12.5C11.3284 12.5 12 11.8284 12 11C12 10.1716 11.3284 9.5 10.5 9.5C9.67157 9.5 9 10.1716 9 11C9 11.8284 9.67157 12.5 10.5 12.5Z" fill="white" stroke="#9199A3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M8 5H13.5" fill="white" stroke="#9199A3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M2.5 5H5" fill="white" stroke="#9199A3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M12 11H13.5" fill="white" stroke="#9199A3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M2.5 11H9" fill="white" stroke="#9199A3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </G>
            <Defs>
                <ClipPath id="clip0_1631_2432">
                <Rect width="16" height="16" fill="white"/>
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