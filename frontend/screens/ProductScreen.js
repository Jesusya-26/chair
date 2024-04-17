import { React, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { ProductImage, ProductInfo, ARButtons } from '../components/product';


const ProductScreen = ( {navigation, route} ) => {

    const product = route.params.product;

    useEffect(
        () => navigation.setOptions({
            title: '',
            headerTransparent: true
        }, [navigation])
    );

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
            <ProductImage product_uri={ product.uri } />
            <ProductInfo product={product}/>
            <ARButtons />
        </SafeAreaView>
    );
}

export default ProductScreen;