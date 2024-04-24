import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Dimensions } from "react-native";
import StarRating from "react-native-star-rating";

import { Filters, ProductHeartIcon } from '../icons';

export default function ProductList ({ products, navigation }) {
  return (
    <View style={styles.main_container}>
      <View style={styles.header_container}>
        <Text style={styles.header_title}>Каталог</Text>
          <TouchableOpacity style={{flexDirection: "row", width: "25%"}}>
            <Filters />
            <Text style={styles.header_filters}>Фильтры</Text>
          </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.list_container}>
        {products.map((item) => {

          return (
            <View style={{width : '50%', flexDirection : "row", justifyContent: 'center', marginBottom: 15}}>
              <ProductCard product={item} navigation={navigation} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const ProductCard = ({ product, navigation }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product', { product })}>
      <View style={styles.product_card}>
        <Image style={styles.product_image} source={{uri: product.uri}}/>
        <Text style={styles.product_price}>{product.price}</Text>
        <Text style={styles.product_name}>{product.description}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}> 
          <StarRating maxStars={5} rating={product.rating} starSize={11} fullStarColor="#0057FF" emptyStarColor="#0057FF" halfStarColor="#0057FF" disabled={true}/>
          <Text style={{fontSize: 11, color: "#9199A3", marginHorizontal: 3}}>{product.rating}</Text>
          <Text style={{fontSize: 11, color: "#9199A3"}}>(8)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.product_heart} onPress={() => setClicked(!clicked)}>
        <ProductHeartIcon isActive={clicked} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  main_container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 20,
    marginBottom: 8
  },
  header_title: {
    fontFamily: "SF-Bold",
    fontStyle: "normal",
    fontSize: 26,
    width: "75%",
  },
  header_filters: {
    fontStyle: "normal",
    fontSize: 14,
    color: "#9199A3",
    marginHorizontal: 3,
  },
  list_container: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 3,
    paddingBottom: 700,
  },
  product_card: {
    flex: 1,
    height: 275,
    width: 155,
  },
  product_image: {
    width: "100%",
    height: "65%",
    borderRadius: 8,
  },
  product_price: {
    fontFamily: "SF-Bold",
    fontSize: 16,
    textAlign: "left",
    color: "#22292E",
    marginTop: 8
  },
  product_name: {
    fontFamily: "SF-Regular",
    fontSize: 12,
    color: "#576875",
    marginVertical: 2
  },
  product_heart: {
    position: 'absolute',
    top: 4,
    right: 5
  }
})