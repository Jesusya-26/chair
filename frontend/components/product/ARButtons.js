import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';


export default function ARButtons() {

    return (
        <ButtonGroup>
            <ARButton>
                <ARButtonText>AR Примерка</ARButtonText>
            </ARButton>
            <FavouriteButton>
                <Ionicons name="heart-outline" size={32} color="black" />
            </FavouriteButton>
        </ButtonGroup>
    );
    }


const ButtonGroup = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-horizontal: 10px;
`;

const ARButton = styled.TouchableOpacity`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    margin-left: 10px;
    margin-vertical: 10px;
    background: #0057FF;
    border-radius: 8px;
`;

const ARButtonText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 32px;
    color: #FFFFFF;
`;

const FavouriteButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #F7F7F7;
    border-radius: 8px;
    margin-vertical: 10px;
    margin-horizontal: 5px;
`;

