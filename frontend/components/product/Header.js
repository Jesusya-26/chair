import styled from 'styled-components/native';


export default function CatalogHeader() {
    return (
      <Container>
        <Title>Каталог</Title>
        <Favorite>
          <Ionicons name="heart-outline" size={32} color="black" />
        </Favorite>
      </Container>
    );
  }

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  flex: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
`;

const Favorite = styled.TouchableOpacity`
  align-items: center;
  margin-right: 40px;
`;