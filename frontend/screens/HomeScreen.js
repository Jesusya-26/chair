import {React, useState, useEffect } from 'react'
import { CatalogHeader, FilterOptions, ProcuctList } from '../components/catalog'
import { SafeAreaView } from 'react-native';

let list

 
const HomeScreen = ( { navigation } ) => {
    
  const [filters, setFilters] = useState([
    {text: 'Всё', key: '1', name: '', is_active: true},
    {text: 'Столы', key: '2', name: 'Стол', is_active: false},
    {text: 'Стулья', key: '3', name: 'Стул', is_active: false},
    {text: 'Тумбочки', key: '4', name: 'Тумбочка', is_active: false},
    {text: 'Диваны', key: '5', name: 'Диван', is_active: false},
    {text: 'Диваны', key: '6', name: 'Диван', is_active: false},
    {text: 'Диваны', key: '7', name: 'Диван', is_active: false},
    {text: 'Диваны', key: '8', name: 'Диван', is_active: false}
  ]);

  const [products, setProcuts] = useState([
      {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '1', price: '6499', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '2', price: '6499', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '3', price: '6499', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '4', price: '6499', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '5', price: '6499', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '6', price: '6499', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '7', price: '6499', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '8', price: '6499', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '9', price: '6499', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-33.userapi.com/impg/jgzTnvEL4bW5JG3Mdh2ryaN7gYHlPAxPIJ9aTw/kVf3pWdgyMA.jpg?size=165x200&quality=96&sign=5be2a47dc89690da0ab45d8377e5fb6f&type=album', key: '10', price: '6499', description: 'Стул для наслаждения своим инстаграмным завт...', name: 'Стул BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '11', price: '6499', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', is_visible: true},
      {uri: 'https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album', key: '12', price: '6499', description: 'С такой деревянной тумбочкой можно и на ул...', name: 'Тумбочка BEKANT', brand: 'Eames', is_visible: true}
    ]);

    useEffect(
      () => navigation.setOptions({
        headerTitle: () => <CatalogHeader/>,
        headerShadowVisible: false
      }, [navigation])
    );

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <FilterOptions filters={filters} setFilters={setFilters} setProducts={setProcuts} />
            <ProcuctList products={products} setProcuts={setProcuts} navigation={navigation} />
        </SafeAreaView>
    );
}

export default HomeScreen;