import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg"

export default function HeartButton({ isActive }) {
    if (isActive){
        return (
            <View style={styles.container}>
                <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                >
                    <Path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="#9199A3" stroke="#9199A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                >
                    <Path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="#ECF2FF" stroke="#9199A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
            </View>
        );
    }
}

  
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
})