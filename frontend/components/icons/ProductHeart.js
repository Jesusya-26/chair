import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function ProductHeartIcon( { isActive, color, size } ) {
  if (isActive) {
    return (
        <View style={styles.container}>
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <Path d="M16.6875 3.75C14.7516 3.75 13.0566 4.5825 12 5.98969C10.9434 4.5825 9.24844 3.75 7.3125 3.75C5.77146 3.75174 4.29404 4.36468 3.20436 5.45436C2.11468 6.54404 1.50174 8.02146 1.5 9.5625C1.5 16.125 11.2303 21.4369 11.6447 21.6562C11.7539 21.715 11.876 21.7458 12 21.7458C12.124 21.7458 12.2461 21.715 12.3553 21.6562C12.7697 21.4369 22.5 16.125 22.5 9.5625C22.4983 8.02146 21.8853 6.54404 20.7956 5.45436C19.706 4.36468 18.2285 3.75174 16.6875 3.75Z" fill="#22292E"/>
        </Svg>
        </View>
      );
  } else {
    return (
      <View style={styles.container}>
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <Path d="M16.6875 3.75C14.7516 3.75 13.0566 4.5825 12 5.98969C10.9434 4.5825 9.24844 3.75 7.3125 3.75C5.77146 3.75174 4.29404 4.36468 3.20436 5.45436C2.11468 6.54404 1.50174 8.02146 1.5 9.5625C1.5 16.125 11.2303 21.4369 11.6447 21.6562C11.7539 21.715 11.876 21.7458 12 21.7458C12.124 21.7458 12.2461 21.715 12.3553 21.6562C12.7697 21.4369 22.5 16.125 22.5 9.5625C22.4983 8.02146 21.8853 6.54404 20.7956 5.45436C19.706 4.36468 18.2285 3.75174 16.6875 3.75ZM12 20.1375C10.2881 19.14 3 14.5959 3 9.5625C3.00149 8.41921 3.45632 7.32317 4.26475 6.51475C5.07317 5.70632 6.16921 5.25149 7.3125 5.25C9.13594 5.25 10.6669 6.22125 11.3062 7.78125C11.3628 7.91881 11.4589 8.03646 11.5824 8.11926C11.7059 8.20207 11.8513 8.24627 12 8.24627C12.1487 8.24627 12.2941 8.20207 12.4176 8.11926C12.5411 8.03646 12.6372 7.91881 12.6937 7.78125C13.3331 6.21844 14.8641 5.25 16.6875 5.25C17.8308 5.25149 18.9268 5.70632 19.7353 6.51475C20.5437 7.32317 20.9985 8.41921 21 9.5625C21 14.5884 13.71 19.1391 12 20.1375Z" fill="#22292E"/>
        </Svg>
      </View>
    );
  }
}


<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6875 3.75C14.7516 3.75 13.0566 4.5825 12 5.98969C10.9434 4.5825 9.24844 3.75 7.3125 3.75C5.77146 3.75174 4.29404 4.36468 3.20436 5.45436C2.11468 6.54404 1.50174 8.02146 1.5 9.5625C1.5 16.125 11.2303 21.4369 11.6447 21.6562C11.7539 21.715 11.876 21.7458 12 21.7458C12.124 21.7458 12.2461 21.715 12.3553 21.6562C12.7697 21.4369 22.5 16.125 22.5 9.5625C22.4983 8.02146 21.8853 6.54404 20.7956 5.45436C19.706 4.36468 18.2285 3.75174 16.6875 3.75Z" fill="#22292E"/>
</svg>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})