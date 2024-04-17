import { React, useState } from 'react'
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

export default function ProductInfo( {product} ) {


    return (
        <Container>
            <MainBlock>
                <InfoBlock>
                    <Name>{product.name}</Name>
                    <Brand>Бренд: {product.brand}</Brand>
                </InfoBlock>
                <Price>{product.price}</Price>
            </MainBlock>
            <Description>{product.description}</Description>
            <Dropdown />
        </Container>
    );
    }

    const Dropdown = () => {
        const [visible, setVisible] = useState(false);
      
        const toggleDropdown = () => {
          setVisible(!visible);
        };
      
        const renderDropdown = () => {
          if (visible) {
            return (
                <Description style={{ marginVertical: 10}}>
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                </Description>
            );
          }
        };
    
        return (
            <View style={{width: '100%'}}>
            <PlusButton onPress={toggleDropdown}>
                <AdditionalBlock>
                    <About>О товаре</About>
                    <Feather name="plus" size={24} color="black" />
                </AdditionalBlock>
            </PlusButton>
            {renderDropdown()}
            </View>
        )
    
    }


const Container = styled.ScrollView`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-horizontal: 10px;
    margin-top: 10px;
`;


const MainBlock = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 28px;
`;

const InfoBlock = styled.View`
    display: flex;
    flex-direction: column;
`;

const Name = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #212121;
    margin-bottom: 12px;
`;

const Brand = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #9E9E9E;
`;

const Price = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    color: #0057FF;
`;

const Description = styled.Text`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: gray;
    padding-bottom: 5px;
`;

const AdditionalBlock = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-color: rgba(0, 0, 0, 0.05);
`;

const About = styled.Text`
    flex: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #212121;
`;

const PlusButton = styled.TouchableOpacity`
    align-items: center;
`;



