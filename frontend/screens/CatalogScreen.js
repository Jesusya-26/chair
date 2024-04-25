import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
 
import { CatalogHeader, ProcuctList } from '../components/catalog';

 
const CatalogScreen = ( { navigation } ) => {

  const [products, setProcuts] = useState([
    {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '1', price: '6499 ₽', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', rating: 4.7},
    {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '2', price: '6499 ₽', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', rating: 4.4},
    {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '3', price: '6499 ₽', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', rating: 4.1},
    {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '4', price: '6499 ₽', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', rating: 3.7},
    {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '5', price: '6499 ₽', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', rating: 5},
    {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '6', price: '6499 ₽', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', rating: 3},
    {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '7', price: '6499 ₽', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', rating: 4.7},
    {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '8', price: '6499 ₽', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', rating: 4.7},
    {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '9', price: '6499 ₽', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', rating: 4.7},
    {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '10', price: '6499 ₽', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', rating: 4.7},
    {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '11', price: '6499 ₽', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', rating: 4.7},
    {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '12', price: '6499 ₽', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', rating: 4.7}
  ]);

    return (
      <LinearGradient colors={['#007AFF', '#0040BB']} start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0.5 }}>
          <StatusBar translucent={true} style='light'/>
          <CatalogHeader />
          <ProcuctList products={products} navigation={navigation} />
      </LinearGradient>
    );
}


export default CatalogScreen;
