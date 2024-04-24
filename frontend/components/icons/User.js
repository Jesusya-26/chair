import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg"

export default function UserIcon( { isActive, color, size } ) {
    if (isActive) {
        return (
            <View style={styles.container}>
            <Svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
            >
                <G clip-path="url(#clip0_1651_11001)">
                    <Path d="M16.125 11.25C16.125 12.0658 15.8831 12.8634 15.4298 13.5417C14.9766 14.2201 14.3323 14.7488 13.5786 15.061C12.8248 15.3732 11.9954 15.4549 11.1953 15.2957C10.3951 15.1366 9.66008 14.7437 9.08319 14.1668C8.5063 13.5899 8.11343 12.8549 7.95427 12.0547C7.7951 11.2546 7.87679 10.4252 8.189 9.67143C8.50121 8.91769 9.02992 8.27345 9.70828 7.82019C10.3866 7.36693 11.1842 7.125 12 7.125C13.0936 7.12624 14.1421 7.56124 14.9154 8.33455C15.6888 9.10787 16.1238 10.1564 16.125 11.25ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96452 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.2488 10.8896 20.0237 9.79077 19.5881 8.76934C19.1525 7.7479 18.5154 6.82481 17.7148 6.05525C16.9143 5.2857 15.9668 4.68549 14.929 4.29053C13.8911 3.89556 12.7843 3.71395 11.6747 3.75656C7.25907 3.92719 3.73782 7.605 3.75 12.0234C3.75424 14.0349 4.49609 15.9749 5.835 17.4759C6.38028 16.6851 7.07292 16.0068 7.875 15.4781C7.94339 15.433 8.02469 15.4114 8.10646 15.4169C8.18824 15.4223 8.26599 15.4543 8.32782 15.5081C9.34705 16.3897 10.6496 16.8749 11.9972 16.8749C13.3448 16.8749 14.6473 16.3897 15.6666 15.5081C15.7284 15.4543 15.8061 15.4223 15.8879 15.4169C15.9697 15.4114 16.051 15.433 16.1194 15.4781C16.9225 16.0065 17.6161 16.6848 18.1622 17.4759C19.5077 15.9694 20.251 14.0199 20.25 12Z" fill="#0057FF"/>
                </G>
                <Defs>
                <ClipPath id="clip0_1651_11001">
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
                <G clip-path="url(#clip0_1607_1532)">
                    <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M5.98047 18.6907C6.54476 17.5792 7.40581 16.6457 8.46816 15.9936C9.53052 15.3415 10.7527 14.9963 11.9992 14.9963C13.2457 14.9963 14.4679 15.3415 15.5303 15.9936C16.5926 16.6457 17.4537 17.5792 18.018 18.6907" fill="white" stroke="#9199A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </G>
                <Defs>
                <ClipPath id="clip0_1607_1532">
                    <Rect width="24" height="24" fill="white"/>
                </ClipPath>
                </Defs>
            </Svg>
            </View>
        );
    }
}


<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1651_11001)">
<path d="M16.125 11.25C16.125 12.0658 15.8831 12.8634 15.4298 13.5417C14.9766 14.2201 14.3323 14.7488 13.5786 15.061C12.8248 15.3732 11.9954 15.4549 11.1953 15.2957C10.3951 15.1366 9.66008 14.7437 9.08319 14.1668C8.5063 13.5899 8.11343 12.8549 7.95427 12.0547C7.7951 11.2546 7.87679 10.4252 8.189 9.67143C8.50121 8.91769 9.02992 8.27345 9.70828 7.82019C10.3866 7.36693 11.1842 7.125 12 7.125C13.0936 7.12624 14.1421 7.56124 14.9154 8.33455C15.6888 9.10787 16.1238 10.1564 16.125 11.25ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96452 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.2488 10.8896 20.0237 9.79077 19.5881 8.76934C19.1525 7.7479 18.5154 6.82481 17.7148 6.05525C16.9143 5.2857 15.9668 4.68549 14.929 4.29053C13.8911 3.89556 12.7843 3.71395 11.6747 3.75656C7.25907 3.92719 3.73782 7.605 3.75 12.0234C3.75424 14.0349 4.49609 15.9749 5.835 17.4759C6.38028 16.6851 7.07292 16.0068 7.875 15.4781C7.94339 15.433 8.02469 15.4114 8.10646 15.4169C8.18824 15.4223 8.26599 15.4543 8.32782 15.5081C9.34705 16.3897 10.6496 16.8749 11.9972 16.8749C13.3448 16.8749 14.6473 16.3897 15.6666 15.5081C15.7284 15.4543 15.8061 15.4223 15.8879 15.4169C15.9697 15.4114 16.051 15.433 16.1194 15.4781C16.9225 16.0065 17.6161 16.6848 18.1622 17.4759C19.5077 15.9694 20.251 14.0199 20.25 12Z" fill="#0057FF"/>
</g>
<defs>
<clipPath id="clip0_1651_11001">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})