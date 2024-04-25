import { useRef } from "react";
import { View, Image, StyleSheet, Text, ScrollView, ImageBackground, Animated, useWindowDimensions } from "react-native";


export default function ProductHeader({ product }) {

  const images = new Array(3).fill(
    product.uri,
  );

  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {/* <Image style={styles.main_image} source={{uri: product.uri}} /> */}
      <View style={{ height: "85%"}}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}>
          {images.map((image) => {
            return (
              <View style={{width: windowWidth}}>
                <Image source={{uri: image}} style={styles.main_image}>
                </Image>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
        </View>
        
      </View>
      <View style={styles.title_container}>
        <Text style={styles.product_name}>{product.name}</Text>
        <Text style={styles.product_price}>{product.price}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: "white",
    marginBottom: 10,
    height: "60%",
  },  
  main_image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  title_container: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 20
  },
  product_name: {
    fontFamily: "SF-Medium",
    fontSize: 22,
    flex: 1,
    color: "#22292E"
  },
  product_price: {
    fontFamily: "SF-Medium",
    fontSize: 22,
    color: "#22292E"
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: "95%",
    left: "41%"
  },
})


