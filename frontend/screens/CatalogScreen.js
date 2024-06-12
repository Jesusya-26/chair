import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { CatalogHeader, ProcuctList } from '../components/catalog';

 
const CatalogScreen = ( { navigation } ) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch('http://localhost:8000/api/v1/products');
              const data = await response.json()["products"];
              setProducts(data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchProducts();
    }, []);

    return (
      <LinearGradient colors={['#007AFF', '#0040BB']} start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0.5 }}>
          <StatusBar translucent={true} style='light'/>
          <CatalogHeader />
          <ProcuctList products={products} navigation={navigation} />
      </LinearGradient>
    );
}


export default CatalogScreen;
