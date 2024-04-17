import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';


export default function ProcuctList({ products, setProcuts, navigation }) {

  return (
    <View style={{marginBottom: 20}}>
      <Container 
        numColumns={2} 
        data={products}
        renderItem={({ item }) => (
          <ProcuctCard product={item} navigation={navigation} />
        )}
        contentContainerStyle={{alignItems: 'center'}}
        />
    </View>
  );
}

export function ProcuctCard({ product, navigation }) {
    if (product.is_visible) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { product })}>
          <ItemGroup>
            <ItemImage source={{uri: product.uri}}/>
            <ItemPrice>{product.price}</ItemPrice>
            <ItemDesc>{product.description}</ItemDesc>
          </ItemGroup>
        </TouchableOpacity>
      );
    }
  }


const Container = styled.FlatList`
  margin-vertical: 15px;
`;

const ItemGroup = styled.View`
  flex-direction: column;
  width: 155px;
  height: 255px;
  margin: 6px;
`;


const ItemImage = styled.Image`
  width: 155px;
  height: 180px;
  border-radius: 8px;
`;

const ItemPrice = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

const ItemDesc = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9E9E9E;
`;
