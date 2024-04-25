import { React } from 'react'
import { SafeAreaView } from 'react-native';

import { ProductHeader, ProductInfo } from '../components/product';
import { StatusBar } from 'expo-status-bar';


const ProductScreen = ( {navigation, route} ) => {

    const product = route.params.product;

    return (
        <SafeAreaView style={{backgroundColor: "#E2E2E2"}}>
            <StatusBar translucent={true} style='dark' />
            <ProductHeader product={product} />
            <ProductInfo product={product} navigation={navigation}/>
        </SafeAreaView>
    );
}

export default ProductScreen;