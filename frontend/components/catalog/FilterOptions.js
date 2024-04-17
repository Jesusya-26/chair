import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const products = [
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
]



export default function FilterOptions( {filters, setFilters, setProducts} ) {

    const opHandler = (key) => {
        let filterName = ''
        setFilters((list) => {
            let arr = []
            list.forEach(element => {
                if (element.key == key) {
                    filterName = element.name
                    element.is_active = true
                } else {
                    element.is_active = false
                }
                arr.push(element)
            });
            return arr
        })
        setProducts(() => {
            return products
        }
        )
        setProducts((list) => {
            return list.filter(product => product.name.includes(filterName))
        }
        )
    }

    return (
        <View>
            <Options 
                horizontal={true} 
                data={filters}
                renderItem={({ item }) => (
                    <FilterOption option={item} opHandler={opHandler} />
                )}
            />
        </View>
    );
    }

export function FilterOption({ option, opHandler }) {

    if (option.is_active) {
        return (
            <TouchableOpacity onPress={ () => opHandler(option.key) }>
                <Option is_active>{option.text}</Option>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress={ () => opHandler(option.key) }>
            <Option>{option.text}</Option>
        </TouchableOpacity>
    );
    }



const Options = styled.FlatList`
    margin-horizontal: 18px;
    margin-top: 10px;
`;

const Option = styled.Text`
    padding: 10px 16px;
    background: ${props => props.is_active ? "#0057FF": "#F2F2F2"};
    border-radius: 8px;
    color: white;
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.is_active ? "#FFFFFF": "#828282"};
    margin-right: 6px;
`;

