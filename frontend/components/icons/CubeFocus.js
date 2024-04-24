import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg"

export default function CubeFocus( { isActive, color, size } ) {
  if (isActive) {
    return (
      <View style={styles.container}>
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <G clip-path="url(#clip0_1496_5170)">
              <Path d="M17.25 4.5H21V8.25" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M6.75 19.5H3V15.75" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M21 15.75V19.5H17.25" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M3 8.25V4.5H6.75" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M12 6L17.25 9V15L12 18L6.75 15V9L12 6Z" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M6.75 9L12 12L17.25 9" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M12 12V18" fill="white" stroke="#0057FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </G>
          <Defs>
            <ClipPath id="clip0_1496_5170">
              <Rect width="24" height="24" fill="white"/>
            </ClipPath>
          </Defs>
        </Svg>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <G clip-path="url(#clip0_1607_1505)">
              <Path d="M17.25 4.5H21V8.25" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M6.75 19.5H3V15.75" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M21 15.75V19.5H17.25" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M3 8.25V4.5H6.75" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M12 6L17.25 9V15L12 18L6.75 15V9L12 6Z" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M6.75 9L12 12L17.25 9" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M12 12V18" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </G>
          <Defs>
            <ClipPath id="clip0_1607_1505">
              <Rect width="24" height="24" fill="white"/>
            </ClipPath>
          </Defs>
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
